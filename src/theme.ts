'use client';

import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#0F1214' },
        secondary: { main: '#15181A' },
    },
    typography: {
        fontFamily: 'var(--font-roboto), Roboto, system-ui, -apple-system, sans-serif',
    },
});


export default theme;