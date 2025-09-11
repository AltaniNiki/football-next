"use client";

import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography"

type LeagueCardProps = {
    name: string | undefined;
    logo: string | undefined;
    country: string | undefined;
    flag: string | undefined;
};


export default function LeagueCard({ name, logo, country, flag }: LeagueCardProps) {
    return (
        <Box sx={{ backgroundColor: '#15181A', borderRadius: '10px', padding: '10px', }}>
            <Grid container >
                <Grid size="auto">
                    <Avatar variant="square" src={logo} sx={{ width: '84px', height: '84px', backgroundColor: 'white', borderRadius: '10px' }} />
                </Grid>
                <Grid sx={{ marginLeft: '10px', alignContent: 'center' }}>
                    <Grid container>
                        <Grid size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '24px', fontWeight: 600 }}>{name}</Typography>
                        </Grid>
                        <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                            <Avatar src={flag} sx={{ width: '34px', height: '34px', marginRight: '5px' }} />
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px' }}>{country}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}