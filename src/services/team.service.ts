import { apiClient } from '@/lib/http/apiClient';

export async function getTeam(id: string) {
    console.log(`/teams?id=${id}`)
    const { data } = await apiClient.get(`/teams?id=${id}`);
    console.log('data------->', data)
    return data.response
    //
}



export async function getCoach(id: string) {
    console.log(`/coachs?team=${id}`)
    const { data } = await apiClient.get(`/coachs?team=${id}`);
    console.log('data------->', data)
    return data.response
    //
}


