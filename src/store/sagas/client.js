import { call, put, delay } from 'redux-saga/effects';
import { clientActions } from '../ducks/client';
import { asyncStorageUtil } from '../../utils';

export function* saveSaga(action) {

    try {
        const retrieveClients = yield call(asyncStorageUtil.getClients);

        let clients = [];

        if (retrieveClients !== null) {
            clients = JSON.parse(retrieveClients);
            clients = [...clients, action.payload]
        } else {
            clients = [...clients, action.payload]
        }

        yield call(asyncStorageUtil.save, JSON.stringify(clients));
        yield put(clientActions.saveClientSuccess());
    } catch (error) {
        yield put(clientActions.saveClientError(error));
    }
}

export function* updateSaga(action) {

    try {
        const retrieveClients = yield call(asyncStorageUtil.getClients);

        if (retrieveClients !== null) {
            const clients = JSON.parse(retrieveClients);

            const index = clients.findIndex(item => item.uuid === action.payload.uuid);

            if (index !== -1) {
                clients[index].uuid = action.payload.uuid;
                clients[index].name = action.payload.name;
                clients[index].birthDay = action.payload.birthDay;
                clients[index].cpf = action.payload.cpf;
                clients[index].cell_phone = action.payload.cell_phone;
                clients[index].email = action.payload.email;
                clients[index].address = action.payload.address;
                clients[index].obs = action.payload.obs;
            }

            yield call(asyncStorageUtil.save, JSON.stringify(clients));
            yield put(clientActions.updateClientSuccess());
        }


    } catch (error) {
        yield put(clientActions.saveClientError(error));
    }
}

export function* removeSaga(action) {
    try {
        const storage = yield call(asyncStorageUtil.getClients);
        const clients = JSON.parse(storage);

        let removed = clients.filter(item => item.uuid !== action.payload);
        yield call(asyncStorageUtil.save, JSON.stringify(removed));
        yield put(clientActions.removeClientSuccess(removed));
    } catch (error) {
        yield put(clientActions.removeClientError(error));
    }
}

export function* getAllSaga() {
    try {
        const storage = yield call(asyncStorageUtil.getClients);
        yield put(clientActions.getAllSuccess(JSON.parse(storage)));
    } catch (error) {
        yield put(clientActions.getAllError(error));
    }
}
