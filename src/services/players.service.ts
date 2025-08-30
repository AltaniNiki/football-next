import { apiClient } from '@/lib/http/apiClient';

export async function getTopScores(league: string, season: string) {
    const { data } = await apiClient.get(`/players/topscorers?league=${league}&season=${season}`);
    return data.response;
}

export async function getSquads(teamId: string) {
    const { data } = await apiClient.get(`/players/squads?team=${teamId}`);
    return data.response;
}


