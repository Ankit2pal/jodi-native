import { allApi, apiClientState } from 'app/services/client';

export default function getCityData(action: any) {
    return apiClientState.get(
        allApi.GETCITY + '/' + action.countryValue +  '/states/' + action.stateValue + '/cities',
    );
}

