import * as React from "react";
import Box from "@mui/material/Box"
import { useAppSelector } from "@/app/store/hooks";
import BasicTable from "../BaseTable";



export default function TeamPlayers() {

    const players = useAppSelector((state) => state.team.players)

    const headers = [
        {
            id: 1,
            title: "Player",
            code: "player",
            key: "player",
            show: true
        },
        {
            id: 2,
            title: "Position",
            code: "position",
            key: "position",
            show: true
        },
        {
            id: 3,
            title: "Age",
            code: "age",
            key: "age",
            show: true
        },
        {
            id: 4,
            title: "Number",
            code: "number",
            key: "number",
            show: true
        }
    ]


    return (
        <Box>
            {players.length > 0 && (
                <BasicTable headers={headers} data={players} supportPagination={false} rowKey="id" columnSlots={{
                    player: ({ row }) => (
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }} >
                            <img
                                src={row.photo}
                                alt={row.name}
                                width={20}
                                height={20}
                                style={{ objectFit: "contain" }}
                            />
                            <span >{row.name}</span>
                        </div>
                    )
                }}>

                </BasicTable>
            )}
        </Box>
    )
}