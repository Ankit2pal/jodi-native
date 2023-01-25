import { apiClient, allApi } from 'app/services/client';

export default function getDeactivateData() {
    return apiClient.get(allApi.DEACTIVATEUSER);
}