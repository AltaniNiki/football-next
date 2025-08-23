"use client"
import * as React from "react";
import { useRouter } from 'next/router'
import LeagueCard from "@/components/League/LeagueCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LeagueStanding from "@/components/League/LeagueStanding";
import { useAppSelector } from '../../store/hooks';
import { setStanding } from "@/app/store/slices/leagueSlice";



export default function LeaguePage({ }) {
    // const router = useRouter()

    const league = useAppSelector((state) => state.league);
    const [tab, setTab] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    // const fetchData = async () => {
    //     const resp = await 
    // }

    return (
        <Grid container spacing={3}>
            <Grid size="grow" sx={{ marginLeft: '5px' }}>
                <LeagueCard
                    name={league?.league?.league?.name}
                    logo={league?.league?.league?.logo}
                    country={league?.league?.country?.name}
                    flag={league?.league?.country?.flag}
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
            </Grid>
        </Grid>
    )



}

