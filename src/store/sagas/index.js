import { all, takeLatest } from 'redux-saga/effects';

import { clientTypes } from '../ducks/client';
import { saveSaga, updateSaga, removeSaga, getAllSaga } from '../sagas/client';

export default function* rootSaga() {
    yield all(
        [
            takeLatest(clientTypes.SAVE, saveSaga),
            takeLatest(clientTypes.UPDATE, updateSaga),
            takeLatest(clientTypes.REMOVE, removeSaga),
            takeLatest(clientTypes.GET_ALL, getAllSaga)
        ]);
}
