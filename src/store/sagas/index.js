import { all, takeLatest } from 'redux-saga/effects';

import { loginTypes } from '../ducks/login';
import { loginSaga } from '../sagas/login';

export default function* rootSaga() {
    yield all([takeLatest(loginTypes.LOGIN_REQUEST, loginSaga)]);
}
