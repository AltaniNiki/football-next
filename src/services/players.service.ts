import { apiClient } from '@/lib/http/apiClient';
import type { TopScoreItem, SquadItem, PlayerProfileItem, PlayerStatistic } from "@/types/api-football"

export async function getTopScores(league: string, season: string): Promise<TopScoreItem[]> {
    const { data } = await apiClient.get(`/players/topscorers?league=${league}&season=${season}`);
    return data.response as TopScoreItem[];
}

export async function getSquads(teamId: string): Promise<SquadItem[]> {
    const { data } = await apiClient.get(`/players/squads?team=${teamId}`);
    return data.response as SquadItem[];
}

export async function getProfile(playerid: string): Promise<PlayerProfileItem[]> {
    const { data } = await apiClient.get(`/players/profiles?player=${playerid}`);
    return data.response as PlayerProfileItem[];
}

export async function getStatistics(playerId: string, season: string): Promise<PlayerStatistic> {
    const { data } = await apiClient.get(`/players?id=${playerId}&season=${season}`)
    return data.response as PlayerStatistic
}