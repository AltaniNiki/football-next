'use client';

import { Provider } from 'react-redux';
import { makeStore } from './store';
import React from 'react';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  // Δημιουργούμε ένα store ανά session του browser
  const storeRef = React.useRef(makeStore());
  return <Provider store={storeRef.current}>{children}</Provider>;
}