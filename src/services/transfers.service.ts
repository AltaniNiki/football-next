import { apiClient } from '@/lib/http/apiClient';

export async function getTransfer(playerId: string) {
    const { data } = await apiClient.get(`/transfers?player=${playerId}`);
    console.log('data------->', data)
    return data.response
    //
}
