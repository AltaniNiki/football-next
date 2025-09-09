"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from "@mui/material/Avatar";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from "@mui/material/ListItemButton";
import style from './LeagueList.module.css'
import { useAppSelector, useAppDispatch } from '../../app/store/hooks';
import { setLeague } from "../../app/store/slices/leagueSlice"
import { list } from "@/models/league";
import { LeagueItem } from "@/types/api-football"


export default function LeagueList() {
    const router = useRouter();

    const [leagueList, setLeagueList] = React.useState<LeagueItem[]>(list)

    const leagues = React.useMemo(() => {
        return leagueList.filter((l) => {
            if (['NA', 'GR', 'GB-ENG'].includes(l.country.code) && [2024, 2025].includes(l.seasons[0].year)) {
                return l;
            }
        })


    }, [leagueList])



    const fetchData = async () => {
        const res = await fetch('/api/leagues?country=Greece');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        console.log(data);
        setLeagueList(data)
    }

    // React.useEffect(() => {
    //     fetchData();
    // }, [])

    const dispatch = useAppDispatch();


    const onSelectLeague = (data: object) => {
        console.log('on select league ', data)
        dispatch(setLeague(data))
        router.push(`/league`)
    }

    return (
        <Box sx={{ backgroundColor: '#00141D', borderRadius: '10px', padding: '10px' }}>
            <Box component="section" sx={{ borderBottom: '1px', borderBottomColor: "white" }}>
                <span className={style.leagueTitle}>Leagues</span>
            </Box>
            <List>
                {
                    leagues.map(l => (
                        <ListItem key={l.league.id} className={style.leagueListItem}>
                            <ListItemButton onClick={() => onSelectLeague(l)}>
                                <ListItemIcon style={{ marginRight: '5px' }}>
                                    <Avatar variant="square" src={l.league.logo} sx={{ bgcolor: "white", width: 34, height: 34, padding: '5px' }} >
                                        {l.league.name}
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText >
                                    <span style={{ fontSize: '14px' }}>
                                        {l.league.name}
                                    </span>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

