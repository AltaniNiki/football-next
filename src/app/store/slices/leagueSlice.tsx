import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LeagueState = { league: object, standing: array };
const initialState: LeagueState = { league: {}, standing: [] };

const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setLeague(state, action: PayloadAction<object>) {
            state.league = action.payload;
        },
        setStanding(state, action: PayloadAction<array>) {
            state.standing = action.payload
        }
    },
});

export const { setLeague, setStanding } = leagueSlice.actions;
export default leagueSlice.reducer;