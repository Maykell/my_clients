import client from './client';
import { constants } from '../../config';

const login = ({ email, password }) => {
    return client({
        baseURL: constants.BASE_URL,
        url: 'login',
        method: 'POST',
        data: {
            email: email,
            password: password
        }
    });
};

export default { login };
