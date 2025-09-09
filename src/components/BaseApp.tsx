'use client'

import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid"


export default function AppBarHeader({

}: {

    }) {
    return (
        <AppBar position="fixed" color="primary" sx={{borderBottom:'1px solid #1E2229'}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Typography variant="h4" noWrap >
                    <Grid >
                        <span style={{fontWeight:"700"}}>Football app</span>
                    </Grid>
                </Typography>
            </Toolbar>
        </AppBar >
    )
}