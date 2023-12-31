import { PrismaClient } from "@prisma/client";
import helper from '../helper'
import crawling from '../utils/crawling'

const prisma: PrismaClient = new PrismaClient();

export default {
    getAllRaces: async (year: string) => {
        try {
            console.log('Service: Get all races!');
            const response = await prisma.race.findMany({
                where: {
                    year: year,
                }
            });
            if (!response.length) {
                const crawlingRace = await crawling(year, "races")
                if (crawlingRace)
                    for (let i = 0; i < crawlingRace.length; ++i) {
                        response.push(await prisma.race.create({
                            data: {
                                id: `${crawlingRace[i].id}-${year}`,
                                grandPrix: crawlingRace[i].grandPrix,
                                date: crawlingRace[i].date,
                                winner: crawlingRace[i].winner,
                                car: crawlingRace[i].car,
                                laps: crawlingRace[i].laps,
                                time: crawlingRace[i].time,
                                year: year
                            }
                        }))
                    }
            }
            return helper.responseData(200, response)
        } catch (error: any) {
            return helper.errorData(500, error.message)
        }
    },
    getInformationRace: async (raceId: string) => {
        try {
            console.log('Service: Get information of race!');
            const response = await prisma.informationRace.findMany({
                where: {
                    raceId: raceId
                }
            });
            if (!response.length) {
                const [key, year] = raceId.split("-");
                const crawlingRace = await crawling(year, "races", key)
                if (crawlingRace)
                    for (let i = 0; i < crawlingRace.length; ++i) {
                        response.push(await prisma.informationRace.create({
                            data: {
                                pos: crawlingRace[i].pos,
                                no: crawlingRace[i].no,
                                driver: crawlingRace[i].driver,
                                car: crawlingRace[i].car,
                                laps: crawlingRace[i].laps,
                                time: crawlingRace[i].time,
                                pts: crawlingRace[i].pts,
                                raceId: raceId,
                            }
                        }))
                    }
            }
            return helper.responseData(200, response)
        } catch (error: any) {
            console.error(error.message)
            return helper.errorData(404, "Information of race not found")
        }
    },
}