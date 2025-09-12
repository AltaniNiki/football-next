import { apiClient } from '@/lib/http/apiClient';
import type { FixtureServiceItem } from "@/types/api-football"


export async function getFixtures(league: string, season: number | string): Promise<FixtureServiceItem[]> {
    const { data } = await apiClient.get(`/fixtures?league=${league}&season=${season}`);

    return data.response as FixtureServiceItem[];
}

