import { apiClient } from '@/lib/http/apiClient';

export async function getTransfer(playerId: string) {
    const { data } = await apiClient.get(`/transfers?player=${playerId}`);
    return data.response
}
