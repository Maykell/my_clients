/**
 * Client Types
 */
export const clientTypes = {
    SAVE: 'client/SAVE',
    SAVE_SUCCESS: 'client/SAVE_SUCCESS',
    SAVE_ERROR: 'client/SAVE_ERROR',

    UPDATE: 'client/UPDATE',
    UPDATE_SUCCESS: 'client/UPDATE_SUCCESS',
    UPDATE_ERROR: 'client/UPDATE_ERROR',

    REMOVE: 'client/REMOVE',
    REMOVE_SUCCESS: 'client/REMOVE_SUCCESS',
    REMOVE_ERROR: 'client/REMOVE_ERROR',

    GET_ALL: 'client/GET_ALL',
    GET_ALL_SUCCESS: 'client/GET_ALL_SUCCESS',
    GET_ALL_ERROR: 'client/GET_ALL_ERROR',
};

/**
 * Client Actions
 */
export const clientActions = {
    saveClient: client => ({
        type: clientTypes.SAVE,
        payload: client
    }),
    saveClientSuccess: () => ({
        type: clientTypes.SAVE_SUCCESS
    }),
    saveClientError: error => ({
        type: clientTypes.SAVE_ERROR,
        payload: error
    }),

    updateClient: client => ({
        type: clientTypes.UPDATE,
        payload: client
    }),
    updateClientSuccess: () => ({
        type: clientTypes.UPDATE_SUCCESS
    }),
    updateClientError: error => ({
        type: clientTypes.UPDATE_ERROR,
        payload: error
    }),

    removeClient: uuid => ({
        type: clientTypes.REMOVE,
        payload: uuid
    }),
    removeClientSuccess: data => ({
        type: clientTypes.REMOVE_SUCCESS,
        payload: data
    }),
    removeClientError: error => ({
        type: clientTypes.REMOVE_ERROR,
        payload: error
    }),

    getAllClients: () => ({
        type: clientTypes.GET_ALL
    }),
    getAllSuccess: data => ({
        type: clientTypes.GET_ALL_SUCCESS,
        payload: data
    }),
    getAllError: error => ({
        type: clientTypes.GET_ALL_ERROR,
        payload: error
    }),
};

/**
 * Client Reducer
 */
const initialState = {
    data: [],
    loading: false,
    error: false
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case clientTypes.SAVE:
            return { ...state, loading: true };
        case clientTypes.SAVE_SUCCESS:
            return { ...state, loading: false };
        case clientTypes.SAVE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case clientTypes.UPDATE:
            return { ...state, loading: true };
        case clientTypes.UPDATE_SUCCESS:
            return { ...state, loading: false };
        case clientTypes.UPDATE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case clientTypes.REMOVE:
            return { ...state, loading: true };
        case clientTypes.REMOVE_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case clientTypes.REMOVE_ERROR:
            return { ...state, loading: false, error: action.payload };

        case clientTypes.GET_ALL:
            return { ...state, loading: true };
        case clientTypes.GET_ALL_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case clientTypes.GET_ALL_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
