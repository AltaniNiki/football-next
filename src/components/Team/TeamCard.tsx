import * as React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";


type TeamCard = {
    name: String,
    national: String,
    logo: String,
    venue: String,
    venueCapacity: Number
}

export default function TeamCard({ name, national, logo, venue, venueCapacity }: TeamCard) {
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
                            <Grid size={12}>
                                <span><strong>Venue:</strong></span><span>{venue} ({national})</span>
                            </Grid>
                            <Grid size={12}>
                                <span><strong>Capacity:</strong></span><span>{venueCapacity}</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}