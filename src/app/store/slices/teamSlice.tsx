import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TeamState = { team: object, };
const initialState: TeamState = { team: {} };

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam(state, action: PayloadAction<object>) {
            state.team = action.payload;
        }
    },
});

export const { setTeam } = teamSlice.actions;
export default teamSlice.reducer;