import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeamState = { transfers: object, players: Array<object>, coach: object, statistics: object };
const initialState: TeamState = { transfers: {}, players: [], coach: {}, statistics: {} };

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTransfers(state, action: PayloadAction<object>) {
            state.transfers = action.payload;
        },
        setPlayers(state, action: PayloadAction<Array<object>>) {
            state.players = action.payload
        },
        setCoach(state, action: PayloadAction<object>) {
            state.coach = action.payload
        },
        setStatistics(state, action: PayloadAction<object>) {
            state.statistics = action.payload
        }
    },
});

export const { setTransfers, setPlayers, setCoach, setStatistics } = teamSlice.actions;
export default teamSlice.reducer;