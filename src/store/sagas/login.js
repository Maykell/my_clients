import { call, put } from 'redux-saga/effects';
import { loginActions } from '../ducks/login';
import { loginService } from '../../services/api';

export function* loginSaga(action) {
    try {
        const response = yield call(loginService.login, action.payload);
        yield put(loginActions.loginSuccess(response.SDTAutenticacaoResponse));
    } catch (error) {
        yield put(loginActions.loginError(error));
    }
}
