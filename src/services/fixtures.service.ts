import { apiClient } from '@/lib/http/apiClient';

export async function getFixtures(league: string, season: number) {
    const { data } = await apiClient.get(`/fixtures?league=${league}&season=${season}`);

    return data.response;
}

