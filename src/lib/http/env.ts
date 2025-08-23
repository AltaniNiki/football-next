// src/lib/env.ts
export const APISPORTS_KEY = process.env.APISPORTS_KEY!;
export const APISPORTS_BASE = 'https://v3.football.api-sports.io';

if (!APISPORTS_KEY) {
  throw new Error('Missing env APISPORTS_KEY');
}