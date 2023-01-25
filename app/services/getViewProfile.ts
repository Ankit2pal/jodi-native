import { apiClient, allApi } from 'app/services/client';

export default function getViewProfileData(userId: any) {
    return apiClient.get(allApi.VIEWPROFILE ,{userId:userId});
}
