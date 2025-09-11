import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid"
import { useAppSelector } from "@/app/store/hooks";
import SportsIcon from '@mui/icons-material/Sports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import PanToolIcon from '@mui/icons-material/PanTool';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import Typography from "@mui/material/Typography";

export default function PlayerStatistics() {

    const statistics = useAppSelector((state) => state.player.statistics);


    return (
        <Box>
            <Grid container>
                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsIcon />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Appearances</Typography></div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.games?.appearences}</Typography>
                                    </div>

                                </Grid>

                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SportsSoccerIcon />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Goals</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.goals?.total}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FormatListNumberedIcon />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }} >Lineups</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.games?.lineups}</Typography>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SportsSoccerIcon color="error" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Assist</Typography> </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.goals?.assists}</Typography>
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <HourglassEmptyIcon color="warning" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Minutes</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.games?.minutes}</Typography>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <BackHandOutlinedIcon color="success" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Saves</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.goals?.saves}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '10px' }}>
                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ViewAgendaIcon color="warning" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Yellow</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.cards?.yellow}</Typography>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SportsSoccerIcon />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Penalty Scored</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.penalty?.scored}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ViewAgendaIcon />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Yellowred</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.cards?.yellowred}</Typography>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d3d5d7ff' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <SportsSoccerIcon color="error" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Penalty Missed</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.penalty?.missed}</Typography>
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <ViewAgendaIcon color="error" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Red</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.cards?.red}</Typography>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <BackHandOutlinedIcon color="success" />
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', marginLeft: '5px' }}>Penalty Saved</Typography>
                                    </div>
                                    <div>
                                        <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px', fontWeight: 600 }}>{statistics?.penalty?.saved}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )

}