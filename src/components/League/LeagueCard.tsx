"use client";

import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";


type LeagueCardProps = {
    name: String;
    logo: String;
    country: String;
    flag: String;
};


export default function LeagueCard({ name, logo, country, flag }: LeagueCardProps) {
    return (
        <Box sx={{ backgroundColor: '#00141D', borderRadius: '10px', padding: '10px' }}>
            <Grid container>
                <Grid size="auto">
                    <Avatar variant="square" src={logo} sx={{ width: '84px', height: '84px', backgroundColor: 'white', borderRadius: '10px' }} />
                </Grid>
                <Grid sx={{ marginLeft: '10px' }}>
                    <Grid container>
                        <Grid size={12}>
                            <span>{name}</span>
                        </Grid>
                        <Grid size={12}>
                            <span>{country}</span>
                            <Avatar src={flag} sx={{ width: '34px', height: '34px' }} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}