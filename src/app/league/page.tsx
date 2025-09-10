"use client"
import * as React from "react";
import LeagueCard from "@/components/League/LeagueCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LeagueStanding from "@/components/League/LeagueStanding";
import LeagueMatches from "@/components/League/LeagueMatches";
import LeagueTopScorers from "@/components/League/LeagueTopScorers";
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setStanding, setMatches, setTopScorers } from "@/app/store/slices/leagueSlice";
import { standing, match, topScorers } from "@/models/league"


export default function LeaguePage({ }) {
    const dispatch = useAppDispatch();

    const league = useAppSelector((state) => state.league.league)
    const season = useAppSelector((state) => state.league.season)

    const [tab, setTab] = React.useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    const fetchData = async () => {

        // league standing
        // const res = await fetch(`/api/standing?league=${league?.league?.id}&season=${season}`);
        // if (!res.ok) throw new Error("Failed to fetch");
        // const data = await res.json();
        // console.log("standing--->", data);
        // if (data.length > 0) {
        console.log('fetchData')
        var temp = standing


        dispatch(setStanding(temp))
        // dispatch(setStanding(data[0].league.standings));
        // }

        // league matches
        // const matches = await fetch(`/api/matches?league=${league?.league?.id}&season=${season}`);
        // if (!matches.ok) throw new Error("Failed to fetch");
        // const m = await matches.json();
        // console.log('matches ----->', m)
        // if (m.length > 0) {
        //     dispatch(setMatches(m))
        // }
        var tempMatch = match

        dispatch(setMatches(tempMatch))

        // league topScores
        // const respTop = await fetch(`/api/players/top-scorers?league=${league?.league?.id}&season=${season}`);
        // if (!respTop.ok) throw new Error("Failed to fetch");
        // const topScorers = await respTop.json();
        // console.log('topScorers ----->', topScorers)
        // if (topScorers.length > 0) {
        //     dispatch(setTopScorers(topScorers))
        // }

        var tempTop = topScorers
        dispatch(setTopScorers(tempTop))
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
                <Box sx={{ backgroundColor: '#15181A', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px' }}>
                    <Grid container>
                        <Grid>
                            <Tabs value={tab} onChange={handleChange} aria-label="basic tabs league" sx={{
                                "& .MuiTab-root": {
                                    color: "white",           // default text
                                    fontWeight: 500,
                                    textTransform: 'capitalize',
                                    fontFamily: 'var(--font-ubuntu-mono), monospace',

                                },
                                "& .Mui-selected": {// selected tab text
                                    color: "white",
                                    fontWeight: 700,
                                },
                                "& .MuiTabs-indicator": {
                                    color: "white",
                                    marginBottom: '5px',
                                    backgroundColor: "white", // κάτω γραμμή indicator
                                },
                            }}>
                                <Tab label="Standing" sx={{ color: 'white' }} />
                                <Tab label="Matches" sx={{ color: 'white' }} />
                                {/* <Tab label="History" sx={{ color: 'white' }} /> */}
                                <Tab label="Top Scorers" sx={{ color: 'white' }} />
                            </Tabs>
                        </Grid>
                        <Grid size={12} sx={{ marginLeft: '5px' }}>
                            {tab == 0 && (<LeagueStanding />)}
                            {tab == 1 && (<LeagueMatches />)}
                            {tab == 2 && (<LeagueTopScorers />)}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )



}

