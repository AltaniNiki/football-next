import * as React from "react";
import BaseTable from "../BaseTable"
import Box from "@mui/material/Box";
import { useAppSelector } from "@/app/store/hooks";


export default function LeagueMatches() {

    const matches = useAppSelector((state) => state.league.matches)
 


    const headers = [{
        id: 1,
        title: "Round",
        code: "round",
        key: "round",
        show: true
    },
    {
        id: 3,
        title: "Date",
        code: "date",
        key: "date",
        show: true
    },
    {
        id: 4,
        title: "Match",
        code: "match",
        key: "match",
        show: true
    }, {
        id: 5,
        title: "Score",
        code: "score",
        key: "score",
        show: true
    },
    {
        id: 5,
        title: "Status",
        code: "status",
        key: "status",
        show: true
    },
    ]

    return (
        <Box>
            {matches.length > 0 && (
                <BaseTable headers={headers} data={matches} supportPagination={false} columnSlots={{
                    round: ({ row }) => (
                        <span>{row.league.round}</span>
                    ),
                    date: ({ row }) => (
                        <span>{row.fixture.date}</span>
                    ),
                    match: ({ row }) => (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px' }}>
                                <img
                                    src={row.teams.home.logo}
                                    alt={row.teams.home.name}
                                    width={20}
                                    height={20}
                                    style={{ objectFit: "contain", marginRight: "5px" }}
                                />
                                <span>{row.teams.home.name}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <img
                                    src={row.teams.away.logo}
                                    alt={row.teams.away.name}
                                    width={20}
                                    height={20}
                                    style={{ objectFit: "contain", marginRight: "5px" }}
                                />
                                <span>{row.teams.away.name}</span>
                            </div>
                        </div>
                    ),
                    score: ({ row }) => (
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div>{row.score.fulltime.home != null ? row.score.fulltime.home : row.score.halftime.home}</div>
                            <div>{row.score.fulltime.away != null ? row.score.fulltime.away : row.score.halftime.away}</div>
                        </div>
                    ),
                    status: ({ row }) => (
                        <div> {row.fixture.status.short != 'FT' ? row.fixture.status.elapsed : row.fixture.status.long}</div>
                    )

                }} />
            )}
        </Box>
    )
}