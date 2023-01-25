import { apiClient, allApi } from 'app/services/client';
import { service } from './apiConfig';
export default function postDeactivateData(DeactiveTypeId: any, DeactiveReason: any, UserId:any) {
   console.log("post de", DeactiveTypeId, DeactiveReason, UserId );
    return service.post(allApi.POSTDEACTIVATE, {
        DeactiveTypeId: DeactiveTypeId,
        DeactiveReason: DeactiveReason,
        UserId: UserId,
    });
}