/**
 * Login Types
 */
export const loginTypes = {
    LOGIN_REQUEST: 'login/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
    LOGIN_ERROR: 'login/LOGIN_ERROR'
};

/**
 * Login Actions
 */
export const loginActions = {
    loginUser: user => ({
        type: loginTypes.LOGIN_REQUEST,
        payload: user
    }),
    loginSuccess: data => ({
        type: loginTypes.LOGIN_SUCCESS,
        payload: data
    }),
    loginError: error => ({
        type: loginTypes.LOGIN_ERROR,
        payload: error
    })
};

/**
 * Login Reducer
 */
const initialState = {
    data: {},
    loading: false,
    error: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginTypes.LOGIN_REQUEST:
            return { ...state, loading: true };
        case loginTypes.LOGIN_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case loginTypes.LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
