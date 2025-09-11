import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PlayerStatistic } from "@/types/api-football"

type PlayerState = { transfers: Array<object>, statistics: PlayerStatistic | null };
const initialState: PlayerState = { transfers: [], statistics: null };

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setTransfers(state, action: PayloadAction<Array<object>>) {
            state.transfers = action.payload;
        },
        setStatistcs(state, action: PayloadAction<PlayerStatistic>) {
            state.statistics = action.payload
        }
    },
});

export const { setTransfers, setStatistcs } = playerSlice.actions;
export default playerSlice.reducer;