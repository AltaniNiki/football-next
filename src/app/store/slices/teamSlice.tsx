import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeamState = { transfers: object, players: Array<object> };
const initialState: TeamState = { transfers: {}, players: [] };

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTransfers(state, action: PayloadAction<object>) {
            state.transfers = action.payload;
        },
        setPlayers(state, action: PayloadAction<Array<object>>) {
            state.players = action.payload
        }
    },
});

export const { setTransfers,setPlayers } = teamSlice.actions;
export default teamSlice.reducer;