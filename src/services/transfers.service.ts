import { apiClient } from '@/lib/http/apiClient';

export async function getTransfer(teamId: string) {
    const { data } = await apiClient.get(`/transfers?team=${teamId}`);
    console.log('data------->', data)
    return data.response
    //
}
