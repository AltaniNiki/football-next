import * as React from "react";
import Box from "@mui/material/Box";
import { useAppSelector } from '@/app/store/hooks';
import BasicTable from "../BaseTable";


export default function PlayerTransfers() {


    const transfers = useAppSelector((state) => state.player.transfers)
    const headers = [{
        id: 1,
        title: "Date",
        code: "date",
        key: "date",
        show: true
    },
    {
        id: 2,
        title: "Left",
        code: "left",
        key: "left",
        show: true
    },
    {
        id: 3,
        title: "Join",
        code: "join",
        key: "join",
        show: true
    },
    {
        id: 4,
        title: "Type",
        code: "type",
        key: "type",
        show: true
    }]

    return (
        <Box>
            {transfers.length > 0 && (
                <BasicTable headers={headers} data={transfers} supportPagination={false} columnSlots={{
                    left: ({ row }) => (
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <img
                                src={row.teams.in.logo}
                                alt={row.teams.in.name}
                                width={20}
                                height={20}
                                style={{ objectFit: "contain" }}
                            />
                            <span >{row.teams.in.name}</span>
                        </div>
                    ),
                    join: ({ row }) => (
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <img
                                src={row.teams.out.logo}
                                alt={row.teams.out.name}
                                width={20}
                                height={20}
                                style={{ objectFit: "contain" }}
                            />
                            <span >{row.teams.out.name}</span>
                        </div>
                    )
                }} />
            )}
        </Box>
    )
}
