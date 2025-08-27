"use client"
import * as React from "react";
import LeagueCard from "@/components/League/LeagueCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LeagueStanding from "@/components/League/LeagueStanding";
import LeagueMatches from "@/components/League/LeagueMatches";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setStanding, setMatches } from "@/app/store/slices/leagueSlice";




export default function LeaguePage({ }) {
    const dispatch = useAppDispatch();

    const league = useAppSelector((state) => state.league.league);

    const [tab, setTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    const fetchData = async () => {
        // const res = await fetch(`/api/standing?league=${league?.league?.id}&season=2023`);
        // if (!res.ok) throw new Error("Failed to fetch");
        // const data = await res.json();
        // console.log("standing--->", data);
        // if (data.length > 0) {
        console.log('fetchData')
        var temp = [
            {
                "rank": 1,
                "team": {
                    "id": 50,
                    "name": "Manchester City",
                    "logo": "https://media.api-sports.io/football/teams/50.png"
                },
                "points": 91,
                "goalsDiff": 62,
                "group": "Premier League",
                "form": "WWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 28,
                    "draw": 7,
                    "lose": 3,
                    "goals": {
                        "for": 96,
                        "against": 34
                    }
                },
                "home": {
                    "played": 19,
                    "win": 14,
                    "draw": 5,
                    "lose": 0,
                    "goals": {
                        "for": 51,
                        "against": 16
                    }
                },
                "away": {
                    "played": 19,
                    "win": 14,
                    "draw": 2,
                    "lose": 3,
                    "goals": {
                        "for": 45,
                        "against": 18
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 2,
                "team": {
                    "id": 42,
                    "name": "Arsenal",
                    "logo": "https://media.api-sports.io/football/teams/42.png"
                },
                "points": 89,
                "goalsDiff": 62,
                "group": "Premier League",
                "form": "WWWWW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 28,
                    "draw": 5,
                    "lose": 5,
                    "goals": {
                        "for": 91,
                        "against": 29
                    }
                },
                "home": {
                    "played": 19,
                    "win": 15,
                    "draw": 2,
                    "lose": 2,
                    "goals": {
                        "for": 48,
                        "against": 16
                    }
                },
                "away": {
                    "played": 19,
                    "win": 13,
                    "draw": 3,
                    "lose": 3,
                    "goals": {
                        "for": 43,
                        "against": 13
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 3,
                "team": {
                    "id": 40,
                    "name": "Liverpool",
                    "logo": "https://media.api-sports.io/football/teams/40.png"
                },
                "points": 82,
                "goalsDiff": 45,
                "group": "Premier League",
                "form": "WDWDL",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 24,
                    "draw": 10,
                    "lose": 4,
                    "goals": {
                        "for": 86,
                        "against": 41
                    }
                },
                "home": {
                    "played": 19,
                    "win": 15,
                    "draw": 3,
                    "lose": 1,
                    "goals": {
                        "for": 49,
                        "against": 17
                    }
                },
                "away": {
                    "played": 19,
                    "win": 9,
                    "draw": 7,
                    "lose": 3,
                    "goals": {
                        "for": 37,
                        "against": 24
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 4,
                "team": {
                    "id": 66,
                    "name": "Aston Villa",
                    "logo": "https://media.api-sports.io/football/teams/66.png"
                },
                "points": 68,
                "goalsDiff": 15,
                "group": "Premier League",
                "form": "LDLDW",
                "status": "same",
                "description": "Promotion - Champions League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 20,
                    "draw": 8,
                    "lose": 10,
                    "goals": {
                        "for": 76,
                        "against": 61
                    }
                },
                "home": {
                    "played": 19,
                    "win": 12,
                    "draw": 4,
                    "lose": 3,
                    "goals": {
                        "for": 48,
                        "against": 28
                    }
                },
                "away": {
                    "played": 19,
                    "win": 8,
                    "draw": 4,
                    "lose": 7,
                    "goals": {
                        "for": 28,
                        "against": 33
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 5,
                "team": {
                    "id": 47,
                    "name": "Tottenham",
                    "logo": "https://media.api-sports.io/football/teams/47.png"
                },
                "points": 66,
                "goalsDiff": 13,
                "group": "Premier League",
                "form": "WLWLL",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 20,
                    "draw": 6,
                    "lose": 12,
                    "goals": {
                        "for": 74,
                        "against": 61
                    }
                },
                "home": {
                    "played": 19,
                    "win": 13,
                    "draw": 0,
                    "lose": 6,
                    "goals": {
                        "for": 38,
                        "against": 27
                    }
                },
                "away": {
                    "played": 19,
                    "win": 7,
                    "draw": 6,
                    "lose": 6,
                    "goals": {
                        "for": 36,
                        "against": 34
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 6,
                "team": {
                    "id": 49,
                    "name": "Chelsea",
                    "logo": "https://media.api-sports.io/football/teams/49.png"
                },
                "points": 63,
                "goalsDiff": 14,
                "group": "Premier League",
                "form": "WWWWW",
                "status": "same",
                "description": "Promotion - Europa Conference League (Qualification: )",
                "all": {
                    "played": 38,
                    "win": 18,
                    "draw": 9,
                    "lose": 11,
                    "goals": {
                        "for": 77,
                        "against": 63
                    }
                },
                "home": {
                    "played": 19,
                    "win": 11,
                    "draw": 4,
                    "lose": 4,
                    "goals": {
                        "for": 44,
                        "against": 26
                    }
                },
                "away": {
                    "played": 19,
                    "win": 7,
                    "draw": 5,
                    "lose": 7,
                    "goals": {
                        "for": 33,
                        "against": 37
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 7,
                "team": {
                    "id": 34,
                    "name": "Newcastle",
                    "logo": "https://media.api-sports.io/football/teams/34.png"
                },
                "points": 60,
                "goalsDiff": 23,
                "group": "Premier League",
                "form": "WLDWW",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 18,
                    "draw": 6,
                    "lose": 14,
                    "goals": {
                        "for": 85,
                        "against": 62
                    }
                },
                "home": {
                    "played": 19,
                    "win": 12,
                    "draw": 4,
                    "lose": 3,
                    "goals": {
                        "for": 49,
                        "against": 22
                    }
                },
                "away": {
                    "played": 19,
                    "win": 6,
                    "draw": 2,
                    "lose": 11,
                    "goals": {
                        "for": 36,
                        "against": 40
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 8,
                "team": {
                    "id": 33,
                    "name": "Manchester United",
                    "logo": "https://media.api-sports.io/football/teams/33.png"
                },
                "points": 60,
                "goalsDiff": -1,
                "group": "Premier League",
                "form": "WWLLD",
                "status": "same",
                "description": "Promotion - Europa League (Group Stage: )",
                "all": {
                    "played": 38,
                    "win": 18,
                    "draw": 6,
                    "lose": 14,
                    "goals": {
                        "for": 57,
                        "against": 58
                    }
                },
                "home": {
                    "played": 19,
                    "win": 10,
                    "draw": 3,
                    "lose": 6,
                    "goals": {
                        "for": 31,
                        "against": 28
                    }
                },
                "away": {
                    "played": 19,
                    "win": 8,
                    "draw": 3,
                    "lose": 8,
                    "goals": {
                        "for": 26,
                        "against": 30
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 9,
                "team": {
                    "id": 48,
                    "name": "West Ham",
                    "logo": "https://media.api-sports.io/football/teams/48.png"
                },
                "points": 52,
                "goalsDiff": -14,
                "group": "Premier League",
                "form": "LWLDL",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 14,
                    "draw": 10,
                    "lose": 14,
                    "goals": {
                        "for": 60,
                        "against": 74
                    }
                },
                "home": {
                    "played": 19,
                    "win": 7,
                    "draw": 8,
                    "lose": 4,
                    "goals": {
                        "for": 31,
                        "against": 28
                    }
                },
                "away": {
                    "played": 19,
                    "win": 7,
                    "draw": 2,
                    "lose": 10,
                    "goals": {
                        "for": 29,
                        "against": 46
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 10,
                "team": {
                    "id": 52,
                    "name": "Crystal Palace",
                    "logo": "https://media.api-sports.io/football/teams/52.png"
                },
                "points": 49,
                "goalsDiff": -1,
                "group": "Premier League",
                "form": "WWWDW",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 13,
                    "draw": 10,
                    "lose": 15,
                    "goals": {
                        "for": 57,
                        "against": 58
                    }
                },
                "home": {
                    "played": 19,
                    "win": 8,
                    "draw": 4,
                    "lose": 7,
                    "goals": {
                        "for": 37,
                        "against": 26
                    }
                },
                "away": {
                    "played": 19,
                    "win": 5,
                    "draw": 6,
                    "lose": 8,
                    "goals": {
                        "for": 20,
                        "against": 32
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 11,
                "team": {
                    "id": 51,
                    "name": "Brighton",
                    "logo": "https://media.api-sports.io/football/teams/51.png"
                },
                "points": 48,
                "goalsDiff": -7,
                "group": "Premier League",
                "form": "LLDWL",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 12,
                    "draw": 12,
                    "lose": 14,
                    "goals": {
                        "for": 55,
                        "against": 62
                    }
                },
                "home": {
                    "played": 19,
                    "win": 8,
                    "draw": 6,
                    "lose": 5,
                    "goals": {
                        "for": 30,
                        "against": 27
                    }
                },
                "away": {
                    "played": 19,
                    "win": 4,
                    "draw": 6,
                    "lose": 9,
                    "goals": {
                        "for": 25,
                        "against": 35
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 12,
                "team": {
                    "id": 35,
                    "name": "Bournemouth",
                    "logo": "https://media.api-sports.io/football/teams/35.png"
                },
                "points": 48,
                "goalsDiff": -13,
                "group": "Premier League",
                "form": "LLLWW",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 13,
                    "draw": 9,
                    "lose": 16,
                    "goals": {
                        "for": 54,
                        "against": 67
                    }
                },
                "home": {
                    "played": 19,
                    "win": 7,
                    "draw": 6,
                    "lose": 6,
                    "goals": {
                        "for": 27,
                        "against": 28
                    }
                },
                "away": {
                    "played": 19,
                    "win": 6,
                    "draw": 3,
                    "lose": 10,
                    "goals": {
                        "for": 27,
                        "against": 39
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 13,
                "team": {
                    "id": 36,
                    "name": "Fulham",
                    "logo": "https://media.api-sports.io/football/teams/36.png"
                },
                "points": 47,
                "goalsDiff": -6,
                "group": "Premier League",
                "form": "WLDDL",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 13,
                    "draw": 8,
                    "lose": 17,
                    "goals": {
                        "for": 55,
                        "against": 61
                    }
                },
                "home": {
                    "played": 19,
                    "win": 9,
                    "draw": 2,
                    "lose": 8,
                    "goals": {
                        "for": 31,
                        "against": 24
                    }
                },
                "away": {
                    "played": 19,
                    "win": 4,
                    "draw": 6,
                    "lose": 9,
                    "goals": {
                        "for": 24,
                        "against": 37
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 14,
                "team": {
                    "id": 39,
                    "name": "Wolves",
                    "logo": "https://media.api-sports.io/football/teams/39.png"
                },
                "points": 46,
                "goalsDiff": -15,
                "group": "Premier League",
                "form": "LLLWL",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 13,
                    "draw": 7,
                    "lose": 18,
                    "goals": {
                        "for": 50,
                        "against": 65
                    }
                },
                "home": {
                    "played": 19,
                    "win": 8,
                    "draw": 3,
                    "lose": 8,
                    "goals": {
                        "for": 26,
                        "against": 30
                    }
                },
                "away": {
                    "played": 19,
                    "win": 5,
                    "draw": 4,
                    "lose": 10,
                    "goals": {
                        "for": 24,
                        "against": 35
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 15,
                "team": {
                    "id": 45,
                    "name": "Everton",
                    "logo": "https://media.api-sports.io/football/teams/45.png"
                },
                "points": 40,
                "goalsDiff": -11,
                "group": "Premier League",
                "form": "LWDWW",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 13,
                    "draw": 9,
                    "lose": 16,
                    "goals": {
                        "for": 40,
                        "against": 51
                    }
                },
                "home": {
                    "played": 19,
                    "win": 8,
                    "draw": 4,
                    "lose": 7,
                    "goals": {
                        "for": 22,
                        "against": 18
                    }
                },
                "away": {
                    "played": 19,
                    "win": 5,
                    "draw": 5,
                    "lose": 9,
                    "goals": {
                        "for": 18,
                        "against": 33
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 16,
                "team": {
                    "id": 55,
                    "name": "Brentford",
                    "logo": "https://media.api-sports.io/football/teams/55.png"
                },
                "points": 39,
                "goalsDiff": -9,
                "group": "Premier League",
                "form": "LWDLW",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 10,
                    "draw": 9,
                    "lose": 19,
                    "goals": {
                        "for": 56,
                        "against": 65
                    }
                },
                "home": {
                    "played": 19,
                    "win": 5,
                    "draw": 7,
                    "lose": 7,
                    "goals": {
                        "for": 29,
                        "against": 34
                    }
                },
                "away": {
                    "played": 19,
                    "win": 5,
                    "draw": 2,
                    "lose": 12,
                    "goals": {
                        "for": 27,
                        "against": 31
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 17,
                "team": {
                    "id": 65,
                    "name": "Nottingham Forest",
                    "logo": "https://media.api-sports.io/football/teams/65.png"
                },
                "points": 32,
                "goalsDiff": -18,
                "group": "Premier League",
                "form": "WLWLL",
                "status": "same",
                "description": null,
                "all": {
                    "played": 38,
                    "win": 9,
                    "draw": 9,
                    "lose": 20,
                    "goals": {
                        "for": 49,
                        "against": 67
                    }
                },
                "home": {
                    "played": 19,
                    "win": 5,
                    "draw": 5,
                    "lose": 9,
                    "goals": {
                        "for": 27,
                        "against": 30
                    }
                },
                "away": {
                    "played": 19,
                    "win": 4,
                    "draw": 4,
                    "lose": 11,
                    "goals": {
                        "for": 22,
                        "against": 37
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 18,
                "team": {
                    "id": 1359,
                    "name": "Luton",
                    "logo": "https://media.api-sports.io/football/teams/1359.png"
                },
                "points": 26,
                "goalsDiff": -33,
                "group": "Premier League",
                "form": "LLDLL",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                    "played": 38,
                    "win": 6,
                    "draw": 8,
                    "lose": 24,
                    "goals": {
                        "for": 52,
                        "against": 85
                    }
                },
                "home": {
                    "played": 19,
                    "win": 4,
                    "draw": 4,
                    "lose": 11,
                    "goals": {
                        "for": 28,
                        "against": 37
                    }
                },
                "away": {
                    "played": 19,
                    "win": 2,
                    "draw": 4,
                    "lose": 13,
                    "goals": {
                        "for": 24,
                        "against": 48
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 19,
                "team": {
                    "id": 44,
                    "name": "Burnley",
                    "logo": "https://media.api-sports.io/football/teams/44.png"
                },
                "points": 24,
                "goalsDiff": -37,
                "group": "Premier League",
                "form": "LLLDW",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                    "played": 38,
                    "win": 5,
                    "draw": 9,
                    "lose": 24,
                    "goals": {
                        "for": 41,
                        "against": 78
                    }
                },
                "home": {
                    "played": 19,
                    "win": 2,
                    "draw": 4,
                    "lose": 13,
                    "goals": {
                        "for": 19,
                        "against": 43
                    }
                },
                "away": {
                    "played": 19,
                    "win": 3,
                    "draw": 5,
                    "lose": 11,
                    "goals": {
                        "for": 22,
                        "against": 35
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            },
            {
                "rank": 20,
                "team": {
                    "id": 62,
                    "name": "Sheffield Utd",
                    "logo": "https://media.api-sports.io/football/teams/62.png"
                },
                "points": 16,
                "goalsDiff": -69,
                "group": "Premier League",
                "form": "LLLLL",
                "status": "same",
                "description": "Relegation - Championship",
                "all": {
                    "played": 38,
                    "win": 3,
                    "draw": 7,
                    "lose": 28,
                    "goals": {
                        "for": 35,
                        "against": 104
                    }
                },
                "home": {
                    "played": 19,
                    "win": 2,
                    "draw": 4,
                    "lose": 13,
                    "goals": {
                        "for": 19,
                        "against": 57
                    }
                },
                "away": {
                    "played": 19,
                    "win": 1,
                    "draw": 3,
                    "lose": 15,
                    "goals": {
                        "for": 16,
                        "against": 47
                    }
                },
                "update": "2024-05-28T00:00:00+00:00"
            }
        ]


        dispatch(setStanding(temp))
        // dispatch(setStanding(data[0].league.standings));
        // }


        // const matches = await fetch(`/api/matches?league=${league?.league?.id}&season=2023`);
        // if (!matches.ok) throw new Error("Failed to fetch");
        // const m = await matches.json();
        // console.log('matches ----->', m)
        // if (m.length > 0) {
        //     dispatch(setMatches(m))
        // }
        var tempMatch = [
            {
                "fixture": {
                    "id": 1066920,
                    "referee": "R. Jones",
                    "timezone": "UTC",
                    "date": "2023-07-22T23:00:00+00:00",
                    "timestamp": 1690066800,
                    "periods": {
                        "first": 1690066800,
                        "second": 1690070400
                    },
                    "venue": {
                        "id": null,
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia, Pennsylvania"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 1",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png",
                        "winner": true
                    },
                    "away": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png",
                        "winner": false
                    }
                },
                "goals": {
                    "home": 4,
                    "away": 3
                },
                "score": {
                    "halftime": {
                        "home": 1,
                        "away": 1
                    },
                    "fulltime": {
                        "home": 4,
                        "away": 3
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066921,
                    "referee": "P. Bankes",
                    "timezone": "UTC",
                    "date": "2023-07-23T20:00:00+00:00",
                    "timestamp": 1690142400,
                    "periods": {
                        "first": 1690142400,
                        "second": 1690146000
                    },
                    "venue": {
                        "id": null,
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia, Pennsylvania"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 1",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png",
                        "winner": true
                    },
                    "away": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png",
                        "winner": false
                    }
                },
                "goals": {
                    "home": 3,
                    "away": 2
                },
                "score": {
                    "halftime": {
                        "home": 2,
                        "away": 1
                    },
                    "fulltime": {
                        "home": 3,
                        "away": 2
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066922,
                    "referee": "L. Szpala",
                    "timezone": "UTC",
                    "date": "2023-07-23T23:00:00+00:00",
                    "timestamp": 1690153200,
                    "periods": {
                        "first": 1690153200,
                        "second": 1690156800
                    },
                    "venue": {
                        "id": null,
                        "name": "Lincoln Financial Field",
                        "city": "Philadelphia, Pennsylvania"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 1",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png",
                        "winner": null
                    },
                    "away": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png",
                        "winner": null
                    }
                },
                "goals": {
                    "home": 3,
                    "away": 3
                },
                "score": {
                    "halftime": {
                        "home": 2,
                        "away": 2
                    },
                    "fulltime": {
                        "home": 3,
                        "away": 3
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066923,
                    "referee": "G. Gonzalez",
                    "timezone": "UTC",
                    "date": "2023-07-26T21:30:00+00:00",
                    "timestamp": 1690407000,
                    "periods": {
                        "first": 1690407000,
                        "second": 1690410600
                    },
                    "venue": {
                        "id": 1898,
                        "name": "Mercedes-Benz Stadium",
                        "city": "Atlanta, Georgia"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 2",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png",
                        "winner": false
                    },
                    "away": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 0,
                    "away": 2
                },
                "score": {
                    "halftime": {
                        "home": 0,
                        "away": 1
                    },
                    "fulltime": {
                        "home": 0,
                        "away": 2
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066924,
                    "referee": "R. Jones",
                    "timezone": "UTC",
                    "date": "2023-07-26T23:00:00+00:00",
                    "timestamp": 1690412400,
                    "periods": {
                        "first": 1690412400,
                        "second": 1690416000
                    },
                    "venue": {
                        "id": 1838,
                        "name": "Exploria Stadium",
                        "city": "Orlando, Florida"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 2",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png",
                        "winner": false
                    },
                    "away": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 0,
                    "away": 2
                },
                "score": {
                    "halftime": {
                        "home": 0,
                        "away": 1
                    },
                    "fulltime": {
                        "home": 0,
                        "away": 2
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066925,
                    "referee": "P. Bankes",
                    "timezone": "UTC",
                    "date": "2023-07-27T00:15:00+00:00",
                    "timestamp": 1690416900,
                    "periods": {
                        "first": 1690416900,
                        "second": 1690420500
                    },
                    "venue": {
                        "id": 1898,
                        "name": "Mercedes-Benz Stadium",
                        "city": "Atlanta, Georgia"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 2",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png",
                        "winner": null
                    },
                    "away": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png",
                        "winner": null
                    }
                },
                "goals": {
                    "home": 1,
                    "away": 1
                },
                "score": {
                    "halftime": {
                        "home": 1,
                        "away": 1
                    },
                    "fulltime": {
                        "home": 1,
                        "away": 1
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066926,
                    "referee": "S. Demianchuk",
                    "timezone": "UTC",
                    "date": "2023-07-28T23:30:00+00:00",
                    "timestamp": 1690587000,
                    "periods": {
                        "first": 1690587000,
                        "second": 1690590600
                    },
                    "venue": {
                        "id": 1619,
                        "name": "Red Bull Arena",
                        "city": "Harrison, New Jersey"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 3",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png",
                        "winner": false
                    },
                    "away": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png",
                        "winner": true
                    }
                },
                "goals": {
                    "home": 1,
                    "away": 2
                },
                "score": {
                    "halftime": {
                        "home": 0,
                        "away": 0
                    },
                    "fulltime": {
                        "home": 1,
                        "away": 2
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066927,
                    "referee": "P. Bankes",
                    "timezone": "UTC",
                    "date": "2023-07-30T16:00:00+00:00",
                    "timestamp": 1690732800,
                    "periods": {
                        "first": 1690732800,
                        "second": 1690736400
                    },
                    "venue": {
                        "id": null,
                        "name": "FedEx Field",
                        "city": "Landover, Maryland"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 3",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png",
                        "winner": null
                    },
                    "away": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png",
                        "winner": null
                    }
                },
                "goals": {
                    "home": 3,
                    "away": 3
                },
                "score": {
                    "halftime": {
                        "home": 3,
                        "away": 2
                    },
                    "fulltime": {
                        "home": 3,
                        "away": 3
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            },
            {
                "fixture": {
                    "id": 1066928,
                    "referee": "R. Jones",
                    "timezone": "UTC",
                    "date": "2023-07-30T18:45:00+00:00",
                    "timestamp": 1690742700,
                    "periods": {
                        "first": 1690742700,
                        "second": 1690746300
                    },
                    "venue": {
                        "id": null,
                        "name": "FedEx Field",
                        "city": "Landover, Maryland"
                    },
                    "status": {
                        "long": "Match Finished",
                        "short": "FT",
                        "elapsed": 90,
                        "extra": null
                    }
                },
                "league": {
                    "id": 1022,
                    "name": "Premier League - Summer Series",
                    "country": "England",
                    "logo": "https://media.api-sports.io/football/leagues/1022.png",
                    "flag": "https://media.api-sports.io/flags/gb-eng.svg",
                    "season": 2023,
                    "round": "Regular Season - 3",
                    "standings": false
                },
                "teams": {
                    "home": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png",
                        "winner": true
                    },
                    "away": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png",
                        "winner": false
                    }
                },
                "goals": {
                    "home": 2,
                    "away": 0
                },
                "score": {
                    "halftime": {
                        "home": 2,
                        "away": 0
                    },
                    "fulltime": {
                        "home": 2,
                        "away": 0
                    },
                    "extratime": {
                        "home": null,
                        "away": null
                    },
                    "penalty": {
                        "home": null,
                        "away": null
                    }
                }
            }
        ]

        dispatch(setMatches(tempMatch))
    };

    React.useEffect(() => {
        if (league?.league?.id) {
            fetchData();
        }
    }, [league?.league?.id, dispatch]);

    return (
        <Grid container spacing={3}>
            <Grid size="grow" sx={{ marginLeft: '5px' }}>
                <LeagueCard
                    name={league?.league?.name}
                    logo={league?.league?.logo}
                    country={league?.country?.name}
                    flag={league?.country?.flag}
                />
            </Grid>
            <Grid size={12} sx={{ marginLeft: '5px' }}>
                <Box>
                    <Tabs value={tab} onChange={handleChange} aria-label="basic tabs league" >
                        <Tab label="Standing" sx={{ color: 'white' }} />
                        <Tab label="Matches" sx={{ color: 'white' }} />
                        <Tab label="History" sx={{ color: 'white' }} />
                        <Tab label="Top Scorers" sx={{ color: 'white' }} />
                    </Tabs>
                </Box>
            </Grid>
            <Grid size={12} sx={{ marginLeft: '5px' }}>
                {tab == 0 && (<LeagueStanding />)}
                {tab == 1 && (<LeagueMatches />)}
            </Grid>
        </Grid>
    )



}

