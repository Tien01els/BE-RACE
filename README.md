## Requirement
- npm version 8.18.0
```sh
npm install -g npm@8.18.0
```
- Nodejs version 14.18.1
```sh
https://nodejs.org/en/blog/release/v14.18.1
```
## Language
- TypeScript

## Framework and Technology
- ExpressJS

## How to run the project on local (Follow the sequence)
### Back-end
1. Go to BE-RACE folder, then type **"npm i"** in the terminal to install all the necessary libraries.
2. Type **"npx prisma migrate dev --name init"** in the terminal to create migration.
3. Then type: **"npm run dev"** to run the Back-end
4. The Back-end will start on http://localhost:8000
## API
### Get all races
Method GET: /api/all-races/:year

Response:

Success: Status code 200
```
[
    {
        "id": string,
        "grandPrix": string,
        "date": string,
        "winner": string,
        "car": string,
        "laps": string,
        "time": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": "1045/austria-2020",
        "grandPrix": "Austria",
        "date": "05 Jul 2020",
        "winner": "Valtteri Bottas BOT",
        "car": "Mercedes",
        "laps": "71",
        "time": "1:30:55.739",
        "year": "2020",
        "createdAt": "2023-06-29T03:06:01.806Z",
        "updatedAt": "2023-06-29T03:06:01.806Z"
    },
    ...
]
```
### Get information of specific race
Method GET: /api/race/:raceId

Response:

Success: Status code 200
```
[
    {
        "id": int,
        "pos": string,
        "no": string,
        "driver": string,
        "car": string,
        "laps": string,
        "time": string,
        "pts": string,
        "raceId": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 404
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": 1,
        "pos": "1",
        "no": "77",
        "driver": "Valtteri Bottas BOT",
        "car": "Mercedes",
        "laps": "71",
        "time": "1:30:55.739",
        "pts": "25",
        "raceId": "1045/austria-2020",
        "createdAt": "2023-06-29T03:08:03.260Z",
        "updatedAt": "2023-06-29T03:08:03.260Z"
    },
    ...
]
```
### Get all fastest laps award
Method GET: /api/fastest-laps/:year

Response:

Success: Status code 200
```
[
    {
        "id": int,
        "grandPrix": string,
        "driver": string,
        "car": string,
        "time": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": 51,
        "grandPrix": "Austria",
        "driver": "Lando Norris NOR",
        "car": "McLaren Renault",
        "time": "1:07.475",
        "year": "2020",
        "createdAt": "2023-06-29T03:09:36.879Z",
        "updatedAt": "2023-06-29T03:09:36.879Z"
    },
    ...
]
```
### Get all drivers
Method GET: /api/all-drivers/:year

Response:

Success: Status code 200
```
[
    {
        "id": string,
        "pos": string,
        "driver": string,
        "nationality": string,
        "car": string,
        "pts": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": "LEWHAM01/lewis-hamilton-2020",
        "pos": "1",
        "driver": "Lewis Hamilton HAM",
        "nationality": "GBR",
        "car": "Mercedes",
        "pts": "347",
        "year": "2020",
        "createdAt": "2023-06-29T03:11:03.692Z",
        "updatedAt": "2023-06-29T03:11:03.692Z"
    },
    ...
]
```
### Get information of specific driver
Method GET: /api/driver/:driverId

Response:

Success: Status code 200
```
[
    {
        "id": int,
        "grandPrix": string,
        "date": string,
        "car": string,
        "racePosition": string,
        "pts": string,
        "driverId": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 404
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": 1,
        "grandPrix": "Bahrain",
        "date": "05 Mar 2023",
        "car": "Mercedes",
        "racePosition": "5",
        "pts": "10",
        "driverId": "LEWHAM01/lewis-hamilton-2020",
        "createdAt": "2023-06-29T03:12:50.589Z",
        "updatedAt": "2023-06-29T03:12:50.589Z"
    },
    ...
]
```
### Search the yearly ranking of specific driver
Method GET: /api/ranking-driver/?year={year}&name={name}

Response:

Success: Status code 200
```
[
    {
        "id": string,
        "pos": string,
        "driver": string,
        "nationality": string,
        "car": string,
        "pts": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    }
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": "NICHUL01/nico-hulkenberg-2023",
        "pos": "13",
        "driver": "Nico Hulkenberg HUL",
        "nationality": "GER",
        "car": "Haas Ferrari",
        "pts": "6",
        "year": "2023",
        "createdAt": "2023-06-28T08:16:28.684Z",
        "updatedAt": "2023-06-28T08:16:28.684Z"
    },
    ...
]
```
### Get all teams
Method GET: /api/all-teams/:year

Response:

Success: Status code 200
```
[
    {
        "id": string,
        "pos": string,
        "team": string,
        "pts": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": "alfa_romeo_ferrari-2023",
        "pos": "7",
        "team": "Alfa Romeo Ferrari",
        "pts": "9",
        "year": "2023",
        "createdAt": "2023-06-28T08:24:00.156Z",
        "updatedAt": "2023-06-28T08:24:00.156Z"
    },
    ...
]
```
### Get information of specific team
Method GET: /api/team/:teamId

Response:

Success: Status code 200
```
[
    {
        "id": int,
        "grandPrix": string,
        "date": string,
        "pts": string,
        "teamId": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": 2,
        "grandPrix": "Bahrain",
        "date": "05 Mar 2023",
        "pts": "4",
        "teamId": "alfa_romeo_ferrari-2023",
        "createdAt": "2023-06-29T03:23:56.815Z",
        "updatedAt": "2023-06-29T03:23:56.815Z"
    },
    ...
]
```
### Search the yearly ranking of specific team
Method GET: /api/ranking-team/?year={year}&name={name}

Response:

Success: Status code 200
```
[
    {
        "id": string,
        "pos": string,
        "team": string,
        "pts": string,
        "year": string,
        "createdAt": datetime,
        "updatedAt": datetime
    },
    ...
]
```
Failed: Status code 500
```
{
  message: string
}
```
Example: 
```
[
    {
        "id": "alphatauri_honda_rbpt-2023",
        "pos": "10",
        "team": "AlphaTauri Honda RBPT",
        "pts": "2",
        "year": "2023",
        "createdAt": "2023-06-28T08:24:00.168Z",
        "updatedAt": "2023-06-28T08:24:00.168Z"
    },
    ...
]
```
## Contribution
Any information please contact me through these email: 
```sh
tiendn.it@gmail.com
``` 
