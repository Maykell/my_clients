import { combineReducers } from 'redux';

import { loginReducer as login } from './login';

const reducers = combineReducers({
    login
});

export default reducers;
