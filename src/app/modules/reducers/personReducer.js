const INITIAL_STATE = {
    persons: [],
    person: {}
};

export function personReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_PERSONS': {
            const { persons } = action.payload;
            return {
                ...state,
                persons,
            }
        }
        case 'FETCH_PERSON': {
            const { person } = action.payload;
            return {
                ...state,
                person,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}