'use client'

import AppBar from "@mui/material/AppBar"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export default function AppBarHeader({

}: {

    }) {
    return (
        <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
            <Toolbar >
                <Typography variant="h6" noWrap >
                    Football
                </Typography>
            </Toolbar>
        </AppBar>
    )
}