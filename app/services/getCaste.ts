import { apiClient, allApi } from 'app/services/client';

export default function getCasteData(Id: number) {
    return apiClient.get(allApi.GETCASTE + Id);
}
