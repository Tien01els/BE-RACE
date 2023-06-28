import { PrismaClient } from "@prisma/client";
import helper from '../helper'
import crawling from '../utils/crawling'

const prisma: PrismaClient = new PrismaClient();

export default {
    getAllTeams: async (year: string) => {
        try {
            console.log('Service: Get all teams!');
            const response = await prisma.team.findMany({
                where: {
                    year: year,
                }
            });
            if (!response.length) {
                const crawlingTeam = await crawling(year, "team")
                if (crawlingTeam)
                    for (let i = 0; i < crawlingTeam.length; ++i) {
                        response.push(await prisma.team.create({
                            data: {
                                id: `${crawlingTeam[i].id}-${year}`,
                                pos: crawlingTeam[i].pos,
                                team: crawlingTeam[i].team,
                                pts: crawlingTeam[i].pts,
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
    getInformationTeam: async (teamId: string) => {
        try {
            console.log('Service: Get information of team!');
            const response = await prisma.informationTeam.findMany({
                where: {
                    teamId: teamId,
                }
            });
            if (!response.length) {
                const [key, year] = teamId.split("-");
                const crawlingTeam = await crawling(year, "team", key)
                if (crawlingTeam)
                    for (let i = 0; i < crawlingTeam.length; ++i) {
                        response.push(await prisma.informationTeam.create({
                            data: {
                                grandPrix: crawlingTeam[i].grandPrix,
                                date: crawlingTeam[i].date,
                                pts: crawlingTeam[i].pts,
                                teamId: teamId,
                            }
                        }))
                    }
            }
            return helper.responseData(200, response)
        } catch (error: any) {
            return helper.errorData(500, error.message)
        }
    },
}