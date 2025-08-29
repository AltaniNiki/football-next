"use client"

import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TeamCard from "@/components/Team/TeamCard";

export default function TeamPage({ params }: { params: Promise<{ id: string }> }) {

    const [team, setTeam] = React.useState(null);

    const { id } = React.use(params);

    const fetchData = async () => {
        try {
            // const res = await fetch(`/api/team?id=${id}`);
            // if (!res.ok) throw new Error("Failed to fetch");
            // const data = await res.json();
            // console.log(data)


            // get Team
            var temp = {
                "team": {
                    "id": 50,
                    "name": "Manchester City",
                    "code": "MAC",
                    "country": "England",
                    "founded": 1880,
                    "national": false,
                    "logo": "https://media.api-sports.io/football/teams/50.png"
                },
                "venue": {
                    "id": 555,
                    "name": "Etihad Stadium",
                    "address": "Rowsley Street",
                    "city": "Manchester",
                    "capacity": 55097,
                    "surface": "grass",
                    "image": "https://media.api-sports.io/football/venues/555.png"
                }
            }
            // setTeam(data[0])

            // getTransfer
            // const res = await fetch(`/api/transfers?id=${team.team.id}`);
            // if (!res.ok) throw new Error("Failed to fetch");
            // const transfers = await res.json();
            // console.log(transfers)

        } catch (e) {
            throw e
        }
    }


    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <Grid container sx={{ marginTop: '5px', marginLeft: '5px' }}>
            <Grid size={12}>
                {![null, undefined].includes(team) && (<TeamCard
                    name={team?.team?.name}
                    national={team?.team?.country}
                    logo={team?.team?.logo}
                    venue={team?.venue?.name}
                    venueCapacity={team?.venue?.capacity} />)}
            </Grid>

        </Grid>
    )
} 