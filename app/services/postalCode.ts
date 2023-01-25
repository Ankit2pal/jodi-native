import { allApi, apiClient } from 'app/services/client';

export default function getPostalCodeData(action: any) {
    console.log('service action', action);
    return apiClient.get(
        allApi.POSTALCODE + '/' + action.countryValue + '/' + action.postalCodeValue,
    );
}
