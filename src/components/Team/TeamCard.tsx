import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography"


type TeamCard = {
    name: String,
    national: String,
    logo: String,
    venue: String,
    venueCapacity: Number
}

export default function TeamCard({ name, national, logo, venue, venueCapacity }: TeamCard) {
    return (
        <Box sx={{ backgroundColor: '#15181A', borderRadius: '10px', padding: '10px' }}>
            <Grid container>
                <Grid size="auto">
                    <Avatar variant="square" src={logo} sx={{ width: '84px', height: '84px', backgroundColor: 'white', borderRadius: '10px' }} />
                </Grid>
                <Grid sx={{ marginLeft: '10px', }}>
                    <Grid container sx={{ alignItems: 'center' }}>
                        <Grid size={12}>
                            <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '24px', fontWeight: 600 }}>{name}</Typography>
                        </Grid>
                        <Grid size={12} >
                            <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px' }}><strong>Venue: </strong></Typography>
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{venue} ({national})</Typography>
                            </Grid>
                            <Grid size={12} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '16px' }}><strong>Capacity: </strong></Typography>
                                <Typography sx={{ fontFamily: "var(--font-ubuntu-mono), monospace", fontSize: '14px', marginLeft: '5px' }}>{venueCapacity}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}