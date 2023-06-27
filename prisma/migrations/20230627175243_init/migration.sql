-- CreateTable
CREATE TABLE `Race` (
    `id` VARCHAR(191) NOT NULL,
    `grandPrix` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `winner` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `laps` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformationRace` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pos` VARCHAR(191) NOT NULL,
    `no` VARCHAR(191) NOT NULL,
    `driver` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `laps` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `pts` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `raceId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Driver` (
    `id` VARCHAR(191) NOT NULL,
    `pos` VARCHAR(191) NOT NULL,
    `driver` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `pts` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformationDriver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grandPrix` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `racePosition` VARCHAR(191) NOT NULL,
    `pts` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `driverId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Team` (
    `id` VARCHAR(191) NOT NULL,
    `pos` VARCHAR(191) NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `pts` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformationTeam` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grandPrix` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `pts` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `teamId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FastestLap` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `grandPrix` VARCHAR(191) NOT NULL,
    `driver` VARCHAR(191) NOT NULL,
    `car` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `InformationRace` ADD CONSTRAINT `InformationRace_raceId_fkey` FOREIGN KEY (`raceId`) REFERENCES `Race`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformationDriver` ADD CONSTRAINT `InformationDriver_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InformationTeam` ADD CONSTRAINT `InformationTeam_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
