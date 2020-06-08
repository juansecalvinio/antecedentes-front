const INITIAL_STATE = {
    user: {},
};

export function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_USER_SUCCESS': {
            const { user } = action.payload;
            return {
                ...state,
                user,
            }
        }
        
        default: {
            return {
                ...state
            }
        }
    }
}