import { allApi, apiClientState } from 'app/services/client';

export default function getCountryData() {
    return apiClientState.get(allApi.GETCOUNTRY);
}
