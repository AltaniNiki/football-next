'use client';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';


// Χρησιμοποιείται αντί για useDispatch() → έχει typing από το store
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Χρησιμοποιείται αντί για useSelector() → έχει typing από το RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;