import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";



export default function TeamStatistics() {

    const statistics = useAppSelector((state) => state.team.statistics)

    return (
        <Box>
            
        </Box>
    )
}