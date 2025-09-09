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
    seasons: Array<SeasonInfo>
}


// player types
export type PlayerItem = {
    id: number,
    name: string,
    age: number,
    number: number,
    position: string,
    photo: string
}


export type PlayerProfileItem = {
    id: number,
    name: string,
    firstname: string,
    lastname: string,
    age: string,
    nationality: string,
    height: string,
    weight: string,
    number: number,
    position: string,
    photo: string,
    birth: {
        date: string,
        place: string,
        country: string
    }
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

export type PlayerStatistic = {
    team: {
        id: number,
        name: string,
        logo: string
    },
    league: {
        id: number,
        name: string,
        country: string,
        logo: string,
        flag: string,
        season: number
    },
    games: {
        appearences: number,
        lineups: number,
        minutes: number,
        number: number | null,
        position: string | null,
        rating: string | null,
        captain: string | null,
    },
    substitutes: {
        in: number,
        out: number,
        bench: number
    },
    shots: {
        total: number,
        on: number
    },
    goals: {
        total: number | null,
        conceded: number | null,
        assists: number | null,
        saves: number | null
    },
    passes: {
        total: number | null,
        key: number | null,
        accuracy: number | null
    },
    tackles: {
        total: number | null,
        blocks: number | null,
        interceptions: number | null
    },
    duels: {
        total: number | null,
        won: number | null
    },
    dribbles: {
        attempts: number | null,
        success: number | null,
        past: number | null
    },
    fouls: {
        drawn: number | null,
        committed: number | null
    },
    cards: {
        yellow: number | null,
        yellowred: number | null,
        red: number | null
    },
    penalty: {
        won: number | null,
        commited: number | null,
        scored: number | null,
        missed: number | null,
        saved: number | null
    }

}

export type TopScoreItem = {
    player: PlayerProfileItem,
    statitstics: PlayerStatistic[]
}

//--- squad ---//


export type PlayerListItem = {
    id: number | null,
    name: string | null,
    age: number | null,
    number: number | null,
    position: string,
    photo: string
}


export type SquadItem = {
    team: {
        id: number,
        name: string,
        logo: string
    },
    players: PlayerListItem[]
}

// --- team ---- //

export type TeamItem = {
    id: number,
    name: string,
    code: string,
    country: string,
    founded: number,
    national: boolean,
    logo: string
}


export type VenueItem = {
    id: number,
    name: string,
    address: string,
    city: string,
    capacity: number,
    surface: string,
    image: string
}


export type TeamListItem = {
    team: TeamItem,
    venue: VenueItem
}

export type TeamStatistics = {
    league: {
        id: number,
        name: string,
        country: string,
        logo: string,
        flag: string,
        season: number
    },
    team: { id: number, name: string, logo: string },
    form: string,
    fixtures: {
        played: {
            home: number,
            away: number,
            total: number
        },
        wins: {
            home: number,
            away: number,
            total: number,
        },
        draws: {
            home: number,
            away: number,
            total: number
        },
        loses: {
            home: number,
            away: number,
            tota: number
        }
    },
    goals: {
        for: {
            total: {
                home: number | null,
                away: number | null,
                total: number | null
            },
            average: {
                home: string | null,
                away: string | null,
                total: string | null

            },
            minute: {
                "0-15": {
                    total: number | null,
                    percentage: string
                },
                "16-30": {
                    total: number | null,
                    percentage: string
                },
                "31-45": {
                    total: number | null,
                    percentage: string
                },
                "46-60": {
                    total: number | null,
                    percentage: string
                },
                "61-75": {
                    total: number | null,
                    percentage: string
                },
                "76-90": {
                    total: number | null,
                    percentage: string
                },
                "91-105": {
                    total: number | null,
                    percentage: string
                },
                "106-120": {
                    total: number | null,
                    percentage: string
                }
            }
            under_over: {
                "0.5": {
                    over: number | null,
                    under: number | null
                },
                "1.5": {
                    over: number | null,
                    under: number | null
                },
                "2.5": {
                    over: number | null,
                    under: number | null
                },
                "3.5": {
                    over: number | null,
                    under: number | null
                },
                "4.5": {
                    over: number | null,
                    under: number | null
                }
            }
        },
        against: {
            total: {
                home: number | null,
                away: number | null,
                total: number | null
            },
            average: {
                home: string | null,
                away: string | null,
                total: string | null

            },
            minute: {
                "0-15": {
                    total: number | null,
                    percentage: string
                },
                "16-30": {
                    total: number | null,
                    percentage: string
                },
                "31-45": {
                    total: number | null,
                    percentage: string
                },
                "46-60": {
                    total: number | null,
                    percentage: string
                },
                "61-75": {
                    total: number | null,
                    percentage: string
                },
                "76-90": {
                    total: number | null,
                    percentage: string
                },
                "91-105": {
                    total: number | null,
                    percentage: string
                },
                "106-120": {
                    total: number | null,
                    percentage: string
                }
            }
            under_over: {
                "0.5": {
                    over: number | null,
                    under: number | null
                },
                "1.5": {
                    over: number | null,
                    under: number | null
                },
                "2.5": {
                    over: number | null,
                    under: number | null
                },
                "3.5": {
                    over: number | null,
                    under: number | null
                },
                "4.5": {
                    over: number | null,
                    under: number | null
                }
            }
        }
    },
    biggest: {
        streak: {
            wins: number | null,
            draws: number | null,
            loses: number | null
        },
        wins: {
            home: string | null,
            away: string | null
        },
        loses: {
            home: string | null,
            away: string | null
        },
        goals: {
            for: {
                home: number | null,
                away: number | null
            },
            against: {
                home: number | null,
                away: number | null
            }
        }
    },
    clean_sheet: {
        home: number | null,
        away: number | null,
        total: number | null
    },
    failed_to_score: {
        home: number | null,
        away: number | null,
        total: number | null
    },
    penalty: {
        scored: {
            total: number | null,
            percentage: string | null
        },
        missed: {
            total: number | null,
            percentage: string | null
        },
        total: number | null
    },
    lineups: LineUpItem[],
    cards: {
        yellow: {
            "0-15": {
                total: number | null,
                percentage: string | null
            },
            "16-30": {
                total: number | null,
                percentage: string | null
            },
            "31-45": {
                total: number | null,
                percentage: string | null
            },
            "46-60": {
                total: number | null,
                percentage: string | null
            },
            "61-75": {
                total: number | null,
                percentage: string | null
            },
            "76-90": {
                total: number | null,
                percentage: string | null
            },
            "91-105": {
                total: number | null,
                percentage: string | null
            },
            "106-120": {
                total: number | null,
                percentage: string | null
            }
        },
        red: {
            "0-15": {
                total: number | null,
                percentage: string | null
            },
            "16-30": {
                total: number | null,
                percentage: string | null
            },
            "31-45": {
                total: number | null,
                percentage: string | null
            },
            "46-60": {
                total: number | null,
                percentage: string | null
            },
            "61-75": {
                total: number | null,
                percentage: string | null
            },
            "76-90": {
                total: number | null,
                percentage: string | null
            },
            "91-105": {
                total: number | null,
                percentage: string | null
            },
            "106-120": {
                total: number | null,
                percentage: string | null
            }
        }
    }
}


//--- coach ---//

export type CoachCareerItem = {
    team: {
        id: number,
        name: string,
        logo: string
    },
    start: string,
    end: string | null

}


export type LineUpItem = {
    formation: string,
    played: number | null
}

export type CoachItem = {
    id: number,
    name: string,
    firstname: string,
    lastname: string,
    age: number,
    birth: {
        date: string,
        place: string,
        country: string
    },
    nationality: string,
    height: string,
    weight: string,
    photo: string,
    team: {
        id: number,
        name: string,
        logo: string
    },
    career: CoachCareerItem[]
}


