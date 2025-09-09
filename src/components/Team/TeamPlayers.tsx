import * as React from "react";
import Box from "@mui/material/Box"
import { useAppSelector } from "@/app/store/hooks";
import BasicTable from "../BaseTable";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";


export default function TeamPlayers() {

    const players = useAppSelector((state) => state.team.players)
    const coach = useAppSelector((state) => state.team.coach)
    const router = useRouter();

    const headers = [
        {
            id: 1,
            title: "Player",
            code: "player",
            key: "player",
            show: true
        },
        {
            id: 2,
            title: "Position",
            code: "position",
            key: "position",
            show: true
        },
        {
            id: 3,
            title: "Age",
            code: "age",
            key: "age",
            show: true
        },
        {
            id: 4,
            title: "Number",
            code: "number",
            key: "number",
            show: true
        }
    ]

    const onSelectPlayer = (id: number) => {
        router.push(`/player/${id}`)
    }

    return (
        <Box>
            <Grid container>
                <Grid size={12} sx={{ marginBottom: '5px' }}>
                    <Card>
                        <CardContent sx={{ paddingBottom: 0 }}>
                            <Grid sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px' }}>Coach:</Typography>
                                <img
                                    src={coach?.photo}
                                    alt={coach?.name}
                                    width={20}
                                    height={20}
                                    style={{ objectFit: "contain" }}
                                />
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: '700' }} >{coach?.name}</Typography>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={12}>
                    {players.length > 0 && (
                        <BasicTable headers={headers} data={players} supportPagination={false} rowKey="id" columnSlots={{
                            player: ({ row }) => (
                                <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: 'pointer' }} onClick={() => onSelectPlayer(row.id)}>
                                    <img
                                        src={row.photo}
                                        alt={row.name}
                                        width={20}
                                        height={20}
                                        style={{ objectFit: "contain" }}
                                    />
                                    <span >{row.name}</span>
                                </div>
                            )
                        }}>

                        </BasicTable>
                    )}
                </Grid>
            </Grid>


        </Box>
    )
}