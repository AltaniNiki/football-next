"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PlayerCard from "@/components/Player/PlayerCard";
import PlayerTransfers from "@/components/Player/PlayerTransfers";
import { setTransfers, setStatistcs } from "@/app/store/slices/playerSlice"
import { useAppDispatch } from '@/app/store/hooks';
import type { PlayerProfileItem } from "@/types/api-football";
import { profile, transfers } from "@/models/player"



export default function PlayerPage({ params }: { params: Promise<{ id: string }> }) {

    const dispatch = useAppDispatch();
    const { id } = React.use(params);
    const [player, setPlayer] = React.useState<PlayerProfileItem | null>(null)
    const [tab, setTab] = React.useState(0)

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
        // const resStat = await fetch(`/api/players/statistics?playerId=${id}`);
        // if (!resStat.ok) throw new Error("Failed to fetch");
        // const dataStatistics = await resStat.json();
        // console.log('transfers -->',dataStatistics)
        // setStatistcs(dataStatistics)
    }


    React.useEffect(() => {
        fetchData();
    }, [])



    return (
        <Box>
            <Grid>
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
            <Grid container>
                <Grid size={12}>
                    <Box>
                        <Tabs value={tab}>
                            <Tab label="Transfers" sx={{ color: 'white' }} />
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
            <Grid container >
                <Grid size={12}>
                    {tab == 0 && <PlayerTransfers />}
                </Grid>
            </Grid>
        </Box>
    )

}