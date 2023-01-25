import { apiClient, allApi, apiClientState } from 'app/services/client';

export default function getMYProfileData(UserId: any) {
    console.log('api user ', apiClient.get(allApi.MYPROFILE + UserId));
    return apiClient.get(allApi.MYPROFILE + UserId);
}
