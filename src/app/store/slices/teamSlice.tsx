import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CoachItem, TeamStatistics } from '@/types/api-football'

type TeamState = { transfers: object, players: Array<object>, coach: CoachItem | null, statistics: TeamStatistics | null };
const initialState: TeamState = { transfers: {}, players: [], coach: null, statistics: null };

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
        setCoach(state, action: PayloadAction<CoachItem>) {
            state.coach = action.payload
        },
        setStatistics(state, action: PayloadAction<TeamStatistics>) {
            state.statistics = action.payload
        }
    },
});

export const { setTransfers, setPlayers, setCoach, setStatistics } = teamSlice.actions;
export default teamSlice.reducer;