import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function changePasswordData(OldPassword: any, NewPassword: any, UserId: any) {
    return service.post(allApi.CHANGEPASSWORD, {
        OldPassword: OldPassword,
        NewPassword: NewPassword,
        UserId: UserId,
    });
}
