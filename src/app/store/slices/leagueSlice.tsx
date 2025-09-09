import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TopScoreItem, LeagueItem, StandingItem, FixtureServiceItem } from '@/types/api-football';

type LeagueState = { league: LeagueItem | null, standing: StandingItem | null, matches: Array<FixtureServiceItem | null>, topScorers: Array<TopScoreItem | null>, season: string };
const initialState: LeagueState = { league: null, standing: null, matches: [], topScorers: [], season: "2023" };

const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeague(state, action: PayloadAction<LeagueItem>) {
            state.league = action.payload;
        },
        setStanding(state, action: PayloadAction<StandingItem>) {
            state.standing = action.payload
        },
        setMatches(state, action: PayloadAction<Array<FixtureServiceItem>>) {
            state.matches = action.payload
        },
        setTopScorers(state, action: PayloadAction<Array<TopScoreItem>>) {
            state.topScorers = action.payload
        }
    },
});

export const { setLeague, setStanding, setMatches, setTopScorers } = leagueSlice.actions;
export default leagueSlice.reducer;