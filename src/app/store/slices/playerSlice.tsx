import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PlayerState = { transfers: Array<object>, statistics: object };
const initialState: PlayerState = { transfers: [], statistics: {} };

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setTransfers(state, action: PayloadAction<Array<object>>) {
            state.transfers = action.payload;
        },
        setStatistcs(state, action: PayloadAction<object>) {
            state.statistics = action.payload
        }
    },
});

export const { setTransfers, setStatistcs } = playerSlice.actions;
export default playerSlice.reducer;