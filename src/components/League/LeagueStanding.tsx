"use client"

import * as React from "react";
import Box from "@mui/material/Box"
import BaseTable from "../BaseTable"
import { useAppSelector } from "@/app/store/hooks";
import { useRouter } from "next/navigation";




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
    const router = useRouter();



    const standing = useAppSelector((state) => state.league.standing)
    const onSelectTeam = (row: object) => {
        router.push(`/team/${row.id}`)
    }

    return (
        <Box>
            {standing != null && standing.length > 0 && (<BaseTable headers={headers} data={standing} supportPagination={false} rowKey="rank" columnSlots={{
                team: ({ row }) => (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: 'pointer' }} onClick={() => onSelectTeam(row.team)}>
                        <img
                            src={row.team.logo}
                            alt={row.team.name}
                            width={20}
                            height={20}
                            style={{ objectFit: "contain" }}
                        />
                        <span >{row.team.name}</span>
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
