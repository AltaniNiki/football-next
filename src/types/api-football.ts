// league types

export type LeagueInfo = {
    id: number;
    name: string;
    type: string;
    logo: string;
};

export type CountryInfo = {
    name: string;
    code: string;
    flag: string;
};

export type CoverageInfo = {
    fixtures: FixturesInfo,
    standings: boolean,
    players: boolean,
    top_scorers: boolean,
    top_assists: boolean,
    top_cards: boolean,
    injuries: boolean,
    predictions: boolean,
    odds: boolean
}

export type FixturesInfo = {
    events: boolean,
    lineups: boolean,
    statistics_fixtures: boolean,
    statistics_players: boolean
}

export type SeasonInfo = {
    year: number,
    start: string,
    end: string,
    current: boolean,
}

export type LeagueItem = {
    league: LeagueInfo,
    country: CountryInfo,
    season: Array<SeasonInfo>
}


// player types
export type PlayerItem = {
    id: Number,
    name: String,
    age: Number,
    number: Number,
    position: String,
    photo: String
}


export type PlayerProfileItem = {
    id: Number,
    name: String,
    firstname: String,
    lastname: String,
    age: String,
    nationality: String,
    height: String,
    weight: String,
    number: Number,
    position: String,
    photo: String,
    birth: any
}



export type FixtureServiceItem = {
    fixture: {
        id: number,
        referee: string,
        timezone: string,
        data: string,
        timestamp: number,
        periods: {
            first: number,
            second: number
        },
        venue: {
            id: number | null,
            name: string,
            city: string
        },
        status: {
            long: string,
            short: string,
            elapsed: number,
            extra: string | null
        }
    },
    league: {
        id: number,
        name: string,
        country: string,
        logo: string,
        flag: string,
        season: number,
        round: string,
        standings: boolean
    },
    teams: {
        home: {
            id: number,
            name: string,
            logo: string,
            winner: boolean
        },
        away: {
            id: number,
            name: string,
            logo: string,
            winner: boolean
        }
    },
    goals: {
        home: number | null,
        away: number | null
    },
    score: {
        halftime: {
            home: number | null,
            away: number | null
        },
        fulltime: {
            home: number | null,
            away: number | null
        },
        extratime: {
            home: number | null,
            away: number | null
        },
        penalty: {
            home: number | null,
            away: number | null
        }
    }
}