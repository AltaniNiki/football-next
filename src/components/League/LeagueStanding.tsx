"use client"

import * as React from "react";
import Box from "@mui/material/Box"
import BaseTable from "../BaseTable"
import { useAppSelector } from "@/app/store/hooks";




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
        code: "lose",
        key: "lose",
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

    const standing = useAppSelector((state) => state.league.standing)

    const standingArray = React.useMemo(() => {
        if (!Array.isArray(standing)) return [];
        return standing.map((s: any) => {
            return {
                id: `rank-${s.rank}`,
                rank: s.rank,
                match: s.all.played,
                wins: s.all.win,
                draw: s.all.draw,
                lose: s.all.lose,
                goals: s.all.goals.for + ':' + s.all.goals.against,
                team: s.team
            }
        })
    }, [standing])


    return (
        <Box>
            {standing.length > 0 && (<BaseTable headers={headers} data={standing} supportPagination={false} rowKey="rank" columnSlots={{
                team: ({ row }) => (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <img
                            src={row.team.logo}
                            alt={row.team.name}
                            width={20}
                            height={20}
                            style={{ objectFit: "contain" }}
                        />
                        <span>{row.team.name}</span>
                    </div>
                ),
                match: ({ row }) => (
                    <span>{row.all.played}</span>
                ),
                wins: ({ row }) => (
                    <span>{row.all.win}</span>
                ),
                draw: ({ row }) => (
                    <span>{row.all.draw}</span>
                ),
                lose: ({ row }) => (
                    <span>{row.all.lose}</span>
                ),
                goals: ({ row }) => (
                    <span>{row.all.goals.for + ':' + row.all.goals.against}</span>
                )
            }} />)}
        </Box>
    )
}
