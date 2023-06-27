import axios from "axios";
import * as cheerio from "cheerio";
import { IRace } from "../../interface";

const handleValueForType = ($: cheerio.CheerioAPI, keysOfType: string[], apiType: string) => {
    return $(`.resultsarchive-table`)
        .first()
        .find("tbody")
        .map((_, element) => {
            return $(element).find('tr').map((_, elementTr) => {
                let idOfElementTr: string = "";
                const allRaces = $(elementTr).find("td:not(.limiter)").map((_, elementTd) => {
                    if ($(elementTd).children().length) {
                        if ($(elementTd).find('a').length) {
                            const href = $(elementTd).find('a').attr('href');
                            if (href) {
                                if (apiType === 'races')
                                    idOfElementTr = href.split("/").slice(-3, -1).join("/")
                                if (apiType === 'drivers' && !href.includes("team"))
                                    idOfElementTr = href.split("/").slice(-2).join("/").replace(".html", "")
                            }
                            return $(elementTd).find('a').text().replace(/\s+/g, ' ').trim()
                        } else {
                            const tagSpanElement = $(elementTd).find('span')
                            if (tagSpanElement.length) {
                                const textArray: string[] = []
                                tagSpanElement.each((_, elementTd) => {
                                    textArray.push($(elementTd).text().trim())
                                })
                                return $(elementTd).text().replace(/\s+/g, ' ').trim();
                            }
                        }
                    }
                    return $(elementTd).text().replace(/\s+/g, ' ').trim()
                }).get()
                if (idOfElementTr) {
                    if (!keysOfType.includes("id")) keysOfType.unshift("id")
                    allRaces.unshift(idOfElementTr);
                }
                let result: any = {};
                for (let i = 0; i < allRaces.length; ++i)
                    result[keysOfType[i]] = allRaces[i];
                return result;
            }).get()
        }).get();
}

export default async (year: string, apiType: string, key?: string) => {
    const proxyURL = `https://cors-get-proxy.sirjosh.workers.dev/?url=`
    const formulaURL = `https://www.formula1.com/en/results.html/${year}${apiType && '/' + apiType || ""}${key && '/' + key || ""}.html`
    const response = await axios.get(`${proxyURL}${formulaURL}`);
    const $ = cheerio.load(response.data);
    let arrayKeys: string[] = [];
    if (apiType === 'races' && !key) {
        arrayKeys = ["grandPrix", "date", "winner", "car", "laps", "time"]
    } else if (apiType === 'races' && key) {
        arrayKeys = ["pos", "no", "driver", "car", "laps", "time", "pts"]
    } else if (apiType === 'drivers' && !key) {
        arrayKeys = ["pos", "driver", "nationality", "car", "pts"]
    } else if (apiType === 'drivers' && key) {
        arrayKeys = ["grandPrix", "date", "car", "racePosition", "pts"]
    }
    return handleValueForType($, arrayKeys, apiType)
}