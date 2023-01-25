import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function resetPassData(password: any,) {
    return service.post(allApi.RESETPASSWORD, {
        password: password
    });
}
