import { apiClient, allApi } from 'app/services/client';

export default function getNotificationData() {
    return apiClient.get(allApi.NOTIFICATION);
}
