import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopScoreItem, LeagueItem, StandingItem, FixtureServiceItem } from '@/types/api-football';

type LeagueState = { league: LeagueItem | null, standing: StandingItem[] | null, matches: FixtureServiceItem[] | null, topScorers: TopScoreItem[], season: string };
const initialState: LeagueState = { league: null, standing: null, matches: [], topScorers: [], season: "2023" };

const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeague(state, action: PayloadAction<LeagueItem>) {
            state.league = action.payload;
        },
        setStanding(state, action: PayloadAction<StandingItem[] | null>) {
            state.standing = action.payload
        },
        setMatches(state, action: PayloadAction<FixtureServiceItem[] | null>) {
            state.matches = action.payload
        },
        setTopScorers(state, action: PayloadAction<TopScoreItem[]>) {
            state.topScorers = action.payload
        }
    },
});

export const { setLeague, setStanding, setMatches, setTopScorers } = leagueSlice.actions;
export default leagueSlice.reducer;