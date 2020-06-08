const INITIAL_STATE = {
    error: null,
    loading: false,
    login: false,
};

export function appReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_REQUEST': {
            return {
                ...state,
                loading: true,
            }
        }

        case 'FETCH_FAILURE': {
            const { error } = action.payload;
            return {
                ...state,
                error,
                loading: false,
            }
        }

        case 'FETCH_SUCCESS': {
            return {
                ...state,
                loading: false,
            }
        }

        case 'LOGIN': {
            return {
                ...state,
                login: true,
            }
        }

        case 'LOGOUT': {
            return {
                ...state,
                login: false,
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}