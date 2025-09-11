"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlayerCard from "@/components/Player/PlayerCard";
import PlayerTransfers from "@/components/Player/PlayerTransfers";
import PlayerStatistics from "@/components/Player/PlayterStatistics";
import { setTransfers, setStatistcs } from "@/app/store/slices/playerSlice"
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import type { PlayerProfileItem } from "@/types/api-football";
import { profile, transfers, statistics } from "@/models/player"



export default function PlayerPage({ params }: { params: Promise<{ id: string }> }) {

    const dispatch = useAppDispatch();
    const { id } = React.use(params);
    const [player, setPlayer] = React.useState<PlayerProfileItem | null>(null)
    const [tab, setTab] = React.useState<number>(0)

    const season = useAppSelector((state) => state.league.season)

    const fetchData = async () => {
        // fetch player
        // const res = await fetch(`/api/players/profiles?playerId=${id}`);
        // if (!res.ok) throw new Error("Failed to fetch");
        // const data = await res.json();

        // setPlayer(data)
        setPlayer(profile[0].player)

        // console.log("profile --->", data);

        // fetch transfers 
        // const resTrans = await fetch(`/api/transfers?playerId=${id}`);
        // if (!resTrans.ok) throw new Error("Failed to fetch");
        // const dataTrans = await resTrans.json();
        // console.log('transfers -->',dataTrans)
        // setTransfers(dataTrans[0].transfers)
        dispatch(setTransfers(transfers))



        // fetch statistic
        // const resStat = await fetch(`/api/players/statistics?playerId=${id}&season=${season}`);
        // if (!resStat.ok) throw new Error("Failed to fetch");
        // const dataStatistics = await resStat.json();
        // console.log('statistics -->', dataStatistics)
        // dispatch(setStatistcs(dataStatistics[0].statistics[0]))
        dispatch(setStatistcs(statistics))
    }


    React.useEffect(() => {
        fetchData();
    }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTab(newValue)
    }

    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                {player != null && (<PlayerCard
                    name={`${player.firstname}  ${player.lastname}`}
                    photo={player.photo}
                    age={player.age}
                    nationality={player.nationality}
                    birth={player.birth.date}
                    height={player.height}
                    weight={player.weight}
                    position={player.position}
                />)
                }
            </Grid>
            <Grid size={12}>
                <Box sx={{ backgroundColor: '#15181A', paddingLeft: '15px', paddingRight: '15px', borderRadius: '10px' }}>
                    <Grid container>
                        <Grid size={12}>
                            <Box>
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
                                    <Tab label="Transfers" sx={{ color: 'white' }} />
                                    <Tab label="Statistics" sx={{ color: 'white' }} />
                                </Tabs>
                            </Box>
                        </Grid>

                        <Grid size={12}>
                            {tab == 0 && <PlayerTransfers />}
                            {tab == 1 && <PlayerStatistics />}
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )

}