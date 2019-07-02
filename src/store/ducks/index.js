import { combineReducers } from 'redux';

import { clientReducer as client } from './client';

const reducers = combineReducers({
    client
});

export default reducers;
