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
import Divider from "@mui/material/Divider";


export default function PlayerStatistics() {

    const statistics = useAppSelector((state) => state.player.statistics);


    return (
        <Box>
            <Grid container>
                <Grid size={12}>
                    <Card>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsIcon /> <span style={{ marginLeft: '5px' }}>Appearances</span></div>
                                    <div>
                                        <span>{statistics?.games?.appearences}</span>
                                    </div>

                                </Grid>

                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsSoccerIcon /> <span style={{ marginLeft: '5px' }}>Goals</span></div>
                                    <div>
                                        <span>{statistics?.goals?.total}</span>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <FormatListNumberedIcon /> <span style={{ marginLeft: '5px' }}>Lineups</span></div>
                                    <div>
                                        <span>{statistics?.games?.lineups}</span>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsSoccerIcon color="yellow" /> <span style={{ marginLeft: '5px' }}>Assist</span> </div>
                                    <div>
                                        <span>{statistics?.goals?.assists}</span>
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <FormatListNumberedIcon /> <span style={{ marginLeft: '5px' }}>Minutes</span></div>
                                    <div>
                                        <span>{statistics?.games?.minutes}</span>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <PanToolIcon color="success" /> <span style={{ marginLeft: '5px' }}>Saves</span></div>
                                    <div>
                                        <span>{statistics?.goals?.saves}</span>
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
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <ViewAgendaIcon color="warning" /> <span style={{ marginLeft: '5px' }}>Yellow</span></div>
                                    <div>
                                        <span>{statistics?.cards?.yellow}</span>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsSoccerIcon /> <span style={{ marginLeft: '5px' }}>Penalty Scored</span></div>
                                    <div>
                                        <span>{statistics?.penalty?.scored}</span>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <ViewAgendaIcon /> <span style={{ marginLeft: '5px' }}>Yellowred</span></div>
                                    <div>
                                        <span>{statistics?.cards?.yellowred}</span>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', borderBottomColor: 'black', borderBottom: '1px solid' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <SportsSoccerIcon color="yellow" /> <span style={{ marginLeft: '5px' }}>Penalty Missed</span></div>
                                    <div>
                                        <span>{statistics?.penalty?.missed}</span>
                                    </div>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2}>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <ViewAgendaIcon /> <span style={{ marginLeft: '5px' }}>Red</span></div>
                                    <div>
                                        <span>{statistics?.cards?.red}</span>
                                    </div>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6, lg: 6 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}> <PanToolIcon color="success" /> <span style={{ marginLeft: '5px' }}>Penalty Saved</span></div>
                                    <div>
                                        <span>{statistics?.penalty?.saved}</span>
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