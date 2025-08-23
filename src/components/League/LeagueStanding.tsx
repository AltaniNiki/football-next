"use client"

import * as React from "react";
import Box from "@mui/material/Box"
import BaseTable from "../BaseTable"




export default function LeagueStanding() {

    const headers = [{
        id: 1,
        title: "#",
        code: "rank",
        key: "rank",
        show: true
    },
    {
        id: 2,
        title: "Team",
        code: "team",
        key: "team",
        show: true
    },
    {
        id: 3,
        title: "Match",
        code: "match",
        key: "match",
        show: true
    },
    {
        id: 4,
        title: "W",
        code: "wins",
        key: "wins",
        show: true
    },
    {
        id: 5,
        title: "D",
        code: "draw",
        key: "draw",
        show: true
    },
    {
        id: 6,
        title: "L",
        code: "lost",
        key: "lost",
        show: true
    },
    {
        id: 6,
        title: "G",
        code: "goals",
        key: "goals",
        show: true
    }
    ];

    return (
        <Box>
            <BaseTable headers={headers} data={[]} />
        </Box>
    )
}
