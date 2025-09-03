"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PlayerCard from "@/components/Player/PlayerCard";
import { profile } from "@/models/player"



export default function PlayerPage({ params }: { params: Promise<{ id: string }> }) {


    const { id } = React.use(params);
    const [player, setPlayer] = React.useState(null);

    const fetchData = async () => {
        // fetch player
        // const res = await fetch(`/api/players/profiles?playerId=${id}`);
        // if (!res.ok) throw new Error("Failed to fetch");
        // const data = await res.json();

        // setPlayer(data)

        // console.log("profile --->", data);
        console.log('prf--->', profile[0].player)
        setPlayer(profile[0].player)

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
        </Box>
    )

}