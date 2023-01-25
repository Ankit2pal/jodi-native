import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function mobileNumberValidData(mobileno: number) {
    console.log('mobileno service', mobileno);
    return service.post(allApi.MOBILENUMBERVALIDATE, { MobileNumber: mobileno });
}
