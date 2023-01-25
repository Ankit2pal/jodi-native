import { allApi, apiClientState } from 'app/services/client';

export default function getStateData(stateValue: any) {
    return apiClientState.get(allApi.GETSTATE + '/' + stateValue + '/states');
}
