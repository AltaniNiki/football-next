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