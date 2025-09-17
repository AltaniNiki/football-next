import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import leagueReducer from '@/app/store/slices/leagueSlice';
import LeagueList from './LeagueList';

// --- Router mock ---
const push = jest.fn();
jest.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));

// --- Data mock (controls filtering) ---
jest.mock('../../models/league', () => ({
  list: [
    {
      league: { id: 1, name: 'Super League', type: 'League', logo: 'logo-gr.png' },
      country: { name: 'Greece', code: 'GR', flag: 'gr.svg' },
      seasons: [{ year: 2024 }],
    },
    {
      league: { id: 2, name: 'Premier League', type: 'League', logo: 'logo-eng.png' },
      country: { name: 'England', code: 'GB-ENG', flag: 'gb-eng.svg' },
      seasons: [{ year: 2025 }],
    },
    // filtered out (wrong year)
    {
      league: { id: 3, name: 'Serie A', type: 'League', logo: 'logo-it.png' },
      country: { name: 'Italy', code: 'IT', flag: 'it.svg' },
      seasons: [{ year: 2023 }],
    },
  ],
}));

function makeStore(preloaded?: any) {
  return configureStore({
    reducer: { league: leagueReducer },
    preloadedState: preloaded,
  });
}

describe('<LeagueList />', () => {
  it('dispatches setLeague, marks selected, and navigates to /league on click', async () => {
    const user = userEvent.setup();
    const store = makeStore();

    render(
      <Provider store={store}>
        <LeagueList />
      </Provider>
    );

    // Get the actual ListItemButton by its accessible name (text content)
    const button = screen.getByRole('button', { name: /super league/i });

    // Sanity: initially not selected
    expect(button).not.toHaveClass('Mui-selected');

    // Click the button (not the inner span)
    await user.click(button);

    // Re-query to pick up updated props/classes after state change
    const selectedButton = screen.getByRole('button', { name: /super league/i });
    expect(selectedButton).toHaveClass('Mui-selected');

    // Router navigation happened
    expect(push).toHaveBeenCalledWith('/league');

    // Store updated — adjust to your exact slice shape if needed
    const state = store.getState() as any;
    const savedName =
      state.league.league?.league?.name ?? state.league.league?.name;
    expect(savedName).toBe('Super League');
  });
});