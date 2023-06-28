import { PrismaClient } from "@prisma/client";
import helper from '../helper'
import crawling from '../utils/crawling'

const prisma: PrismaClient = new PrismaClient();

export default {
    getFastestLaps: async (year: string) => {
        try {
            console.log('Service: Get all fastest lap award!');
            const response = await prisma.fastestLap.findMany({
                where: { year: year }
            });
            if (!response.length) {
                const crawlingDriver = await crawling(year, "fastest-laps")
                if (crawlingDriver)
                    for (let i = 0; i < crawlingDriver.length; ++i) {
                        response.push(await prisma.fastestLap.create({
                            data: {
                                grandPrix: crawlingDriver[i].grandPrix,
                                driver: crawlingDriver[i].driver,
                                car: crawlingDriver[i].car,
                                time: crawlingDriver[i].time,
                                year: year
                            }
                        }))
                    }
            }
            return helper.responseData(200, response)
        } catch (error: any) {
            return helper.errorData(500, error.message)
        }
    }
}