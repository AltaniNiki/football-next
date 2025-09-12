"use client"

import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TeamCard from "@/components/Team/TeamCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TeamPlayers from "@/components/Team/TeamPlayers";
import TeamStatistics from "@/components/Team/TeamStatistics";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setTransfers, setPlayers, setCoach, setStatistics } from "@/app/store/slices/teamSlice"
import { transfers, players, coach, statistics, team } from "@/models/team"
import type { TeamListItem } from "@/types/api-football"

export default function TeamPage({ params }: { params: Promise<{ id: string }> }) {

    const [teamData, setTeamData] = React.useState<TeamListItem | null>(null);
    const [tab, setTab] = React.useState<number>(0);
    const dispatch = useAppDispatch();

    const { id } = React.use(params);

    const league = useAppSelector((state) => state.league.league)
    const season = useAppSelector((state) => state.league.season)

    const fetchData = async () => {
        try {
            // get Team
            const res = await fetch(`/api/team?id=${id}`);
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            const teamObj = data[0]
            setTeamData(data[0])
            console.log('teamObj', teamObj)

            // setTeamData(team)

            // getTransfer
            // const resTr = await fetch(`/api/transfers?teamId=${temp.team.id}`);
            // if (!resTr.ok) throw new Error("Failed to fetch");
            // const transfers = await resTr.json();
            // console.log('transfers--->', transfers)
            // dispatch(setTransfers(transfers))


            dispatch(setTransfers(transfers))


            // get roster
            // const resPlayer = await fetch(`/api/players/squads?teamId=${teamObj.team.id}`);
            // if (!resPlayer.ok) throw new Error("Failed to fetch");
            // const players = await resPlayer.json();
            // console.log('players--->', players)
            // dispatch(setPlayers(players[0].players))


            dispatch(setPlayers(players.players))

            // get Coach
            // const resCoach = await fetch(`/api/team/coach?teamId=${teamObj.team.id}`);
            // if (!resCoach.ok) throw new Error("Failed to fetch");
            // const coach = await resCoach.json();
            // console.log('coach--->', coach)
            // dispatch(setCoach(coach[0]))

            dispatch(setCoach(coach[0]))


            // get statistics
            // const resStatistics = await fetch(`/api/team/statistics?league=${league.league.id}&season=${season}&teamId=${teamObj.team.id}`);
            // if (!resStatistics.ok) throw new Error("Failed to fetch");
            // const statistics = await resStatistics.json();
            // console.log('statistics--->', statistics)
            // dispatch(setStatistics(statistics))

            dispatch(setStatistics(statistics))
        } catch (e) {
            throw e
        }
    }


    React.useEffect(() => {
        fetchData()

    }, [id])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                {teamData != null && (<TeamCard
                    name={teamData?.team.name}
                    national={teamData?.team.country}
                    logo={teamData?.team?.logo}
                    venue={teamData?.venue?.name}
                    venueCapacity={teamData?.venue?.capacity} />)}
            </Grid>
            <Grid size={12}>
                <Box sx={{ backgroundColor: '#15181A', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px' }}>
                    <Grid container>
                        <Grid size={12}>
                            <Tabs value={tab} onChange={handleChange} sx={{
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
                                <Tab label="Players" sx={{ color: 'white' }} />
                                <Tab label="Statistics" sx={{ color: 'white' }} />
                            </Tabs>
                        </Grid>
                        <Grid size={12}>
                            {tab == 0 && <TeamPlayers />}
                            {tab == 1 && <TeamStatistics />}
                        </Grid>
                    </Grid>
                </Box>
            </Grid >
        </Grid >
    )
} 