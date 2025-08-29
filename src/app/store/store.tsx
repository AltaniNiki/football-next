import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from "./slices/leagueSlice"
import teamReducer from "./slices/teamSlice"

export const makeStore = () =>
    configureStore({
        reducer: {
            league: leagueReducer,
            team: teamReducer
        },
        // middleware: (gDM) => gDM(), // αν χρειαστεί να προσθέσεις άλλα
        devTools: process.env.NODE_ENV !== 'production',
    });

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;