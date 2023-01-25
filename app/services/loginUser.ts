import {apiClient, allApi} from './client';
import {service} from './apiConfig';
export default function loginUser(EmailId: string, PasswordHash: string) {
  return apiClient.post(allApi.LOGIN, {EmailId, PasswordHash});
}
