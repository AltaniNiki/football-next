import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LeagueState = { league: object, standing: object, matches: Array<object> };
const initialState: LeagueState = { league: {}, standing: {}, matches: [] };

const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeague(state, action: PayloadAction<object>) {
            state.league = action.payload;
        },
        setStanding(state, action: PayloadAction<object>) {
            state.standing = action.payload
        },
        setMatches(state, action: PayloadAction<Array<object>>) {
            state.matches = action.payload
        }
    },
});

export const { setLeague, setStanding, setMatches } = leagueSlice.actions;
export default leagueSlice.reducer;