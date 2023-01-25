import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function validateEmailData(email: string) {
    return service.post(allApi.VALIDATEEMAIL, { EmailId: email });
}
