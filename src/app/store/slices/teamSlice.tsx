import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeamState = { transfers: object, players: Array<object>, coach: object };
const initialState: TeamState = { transfers: {}, players: [], coach: {} };

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
        }
    },
});

export const { setTransfers, setPlayers, setCoach } = teamSlice.actions;
export default teamSlice.reducer;