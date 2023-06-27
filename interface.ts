export interface IRace {
    id: string
    grandPrix: string
    date: string
    winner: string
    car: string
    laps: string
    time: string
    year: string
}

export interface IInformationRace {
    id: string
    pos: string
    no: string
    driver: string
    car: string
    laps: string
    time: string
    pts: string
    year: string
}

export interface IDriver {
    id: string
    pos: string
    driver: string
    nationality: string
    car: string
    pts: string
    year: string
}

export interface IInformationDriver {
    id: string
    grandPrix: string
    date: string
    car: string
    racePosition: string
    pts: string
    year: string
}

export interface ITeam {
    id: string
    pos: string
    team: string
    pts: string
    year: string
}

export interface IInformationTeam {
    id: string
    grandPrix: string
    date: string
    pts: string
    year: string
}

export interface IFastestLap {
    id: string
    grandPrix: string
    driver: string
    car: string
    time: string
    year: string
}