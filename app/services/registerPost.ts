import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function registerPostData(groomName: string, gender: string, phoneNo: number) {
    return apiClient.post(allApi.REGISTERPOST, {
        FullName: groomName,
        GenderId: gender,
        mobilenumber: phoneNo,
    });
}
