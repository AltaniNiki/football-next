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
import type { StandingItem, FixtureServiceItem, TopScoreItem } from "@/types/api-football"


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
        const res = await fetch(`/api/standing?league=${league?.league?.id}&season=${season}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
       
        if (data.length > 0) {



            // const tempStanding: StandingItem[] = standing
            // dispatch(setStanding(tempStanding))
            dispatch(setStanding(data[0].league.standings[0]));
        }

        // league matches
        const matches = await fetch(`/api/matches?league=${league?.league?.id}&season=${season}`);
        if (!matches.ok) throw new Error("Failed to fetch");
        const m: FixtureServiceItem[] = await matches.json();
     
        if (m.length > 0) {
            dispatch(setMatches(m))
        }
        // const tempMatch: FixtureServiceItem[] = match

        // dispatch(setMatches(tempMatch))

        // league topScores
        const respTop = await fetch(`/api/players/top-scorers?league=${league?.league?.id}&season=${season}`);
        if (!respTop.ok) throw new Error("Failed to fetch");
        const topScorers: TopScoreItem[] = await respTop.json();
     
        if (topScorers.length > 0) {
            dispatch(setTopScorers(topScorers))
        }

        // var tempTop: TopScoreItem[] = topScorers
        // dispatch(setTopScorers(tempTop))
    };

    React.useEffect(() => {
        if (league?.league?.id) {
            fetchData();
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [league?.league?.id,season]);

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
                                    color: "white !important",           // default text
                                    fontWeight: 500,
                                    textTransform: 'capitalize',
                                    fontFamily: 'var(--font-ubuntu-mono), monospace',

                                },
                                "& .Mui-selected": {// selected tab text
                                    color: "white !important",
                                    fontWeight: 700,
                                },
                                "& .MuiTabs-indicator": {
                                    color: "white !important",
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

