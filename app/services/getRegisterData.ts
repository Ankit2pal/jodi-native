import { apiClient, allApi } from 'app/services/client';

export default function getRegisterData() {
    return apiClient.get(allApi.GETREGISTERDATA);
}
