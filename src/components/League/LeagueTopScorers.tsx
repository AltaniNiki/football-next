import * as React from "react";
import Box from "@mui/material/Box";
import BasicTable from "../BaseTable";
import { useAppSelector } from "@/app/store/hooks";
import { useRouter } from "next/navigation";



export default function LeagueTopScorers() {

    const topScorers = useAppSelector((state) => state.league.topScorers);

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
            title: "Goals",
            code: "goals",
            key: "goals",
            show: true
        },
        {
            id: 3,
            title: "Games",
            code: "games",
            key: "games",
            show: true
        }
    ]

    const router = useRouter();

    const onSelectPlayer = (id: number) => {
        router.push(`/player/${id}`)
    }

    return (
        <Box>
            <BasicTable
                headers={headers}
                data={topScorers}
                supportPagination={false}
                columnSlots={{
                    player: ({ row }) => (
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '5px', cursor: 'pointer' }} onClick={() => onSelectPlayer(row.player.id)}>
                            <img
                                src={row.player.photo}
                                alt={row.player.name}
                                width={20}
                                height={20}
                                style={{ objectFit: "contain", marginRight: "5px" }}
                            />
                            <span>{row.player.name}</span>
                        </div>
                    ),
                    goals: ({ row }) => (
                        <span> {row.statistics[0].goals.total}</span>
                    ),
                    games: ({ row }) => (
                        <span>{row.statistics[0].games.appearences}</span>
                    )
                }}
            />
        </Box >
    )
}