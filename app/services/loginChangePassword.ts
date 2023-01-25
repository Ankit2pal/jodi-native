import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function loginChangePassData(email: string) {
    return service.post(allApi.LOGINCHANGEPASSWORD, { EmailId: email });
}
