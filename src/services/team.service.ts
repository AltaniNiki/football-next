import { apiClient } from '@/lib/http/apiClient';
import { TeamListItem, CoachItem, TeamStatistics } from "@/types/api-football"


export async function getTeam(id: string): Promise<TeamListItem[]> {
    const { data } = await apiClient.get(`/teams?id=${id}`);
    return data.response as TeamListItem[];
}



export async function getCoach(id: string): Promise<CoachItem[]> {
    const { data } = await apiClient.get(`/coachs?team=${id}`);
    return data.response as CoachItem[]

}


export async function getStatistics(leagueId: string, season: string, teamId: string): Promise<TeamStatistics> {
    const { data } = await apiClient.get(`/teams/statistics?league=${leagueId}&season=${season}&team=${teamId}`);
    return data.response as TeamStatistics
}