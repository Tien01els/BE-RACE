import { PrismaClient } from "@prisma/client";
import helper from '../helper'
import crawling from '../utils/crawling'

const prisma: PrismaClient = new PrismaClient();

export default {
    getAllDrivers: async (year: string) => {
        try {
            console.log('Service: Get all drivers!');
            const response = await prisma.driver.findMany({
                where: {
                    year: year,
                }
            });
            if (!response.length) {
                const crawlingDriver = await crawling(year, "drivers")
                if (crawlingDriver)
                    for (let i = 0; i < crawlingDriver.length; ++i) {
                        response.push(await prisma.driver.create({
                            data: {
                                id: `${crawlingDriver[i].id}-${year}`,
                                pos: crawlingDriver[i].pos,
                                driver: crawlingDriver[i].driver,
                                nationality: crawlingDriver[i].nationality,
                                car: crawlingDriver[i].car,
                                pts: crawlingDriver[i].pts,
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
    getInformationDriver: async (driverId: string) => {
        try {
            console.log('Service: Get information of driver!');
            const response = await prisma.informationDriver.findMany({
                where: {
                    driverId: driverId
                }
            });
            if (!response.length) {
                const [key, year] = driverId.split("-");
                const crawlingDriver = await crawling(year, "drivers", key)
                if (crawlingDriver)
                    for (let i = 0; i < crawlingDriver.length; ++i) {
                        response.push(await prisma.informationDriver.create({
                            data: {
                                grandPrix: crawlingDriver[i].grandPrix,
                                date: crawlingDriver[i].date,
                                car: crawlingDriver[i].car,
                                racePosition: crawlingDriver[i].racePosition,
                                pts: crawlingDriver[i].pts,
                                driverId: driverId,
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