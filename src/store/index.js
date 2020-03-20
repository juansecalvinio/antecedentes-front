import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../utils/api';


const INITIAL_STATE = {
    error: null,
    loading: false,
    login: false,
    person: {},
    user: {},
};

function appReducer(state = INITIAL_STATE, action) {
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

        case 'FETCH_PERSON_SUCCESS': {
            const { person } = action.payload;
            return {
                ...state,
                person,
                loading: false,
            }
        }

        case 'FETCH_USER_SUCCESS': {
            const { user } = action.payload;
            return {
                ...state,
                user,
                loading: false,
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

// Thunk
const getPersonRequest = () => {
    return function(dispatch) {
        try {
            dispatch(fetchRequest());
            //const person = await api.getPerson();
            const person = api.getPersonFake();
            console.log(person);
            dispatch(fetchPersonSuccess(person));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

const insertPerson = person => {
    return async function(dispatch) {
        try {
            dispatch(fetchRequest());
            const response = await api.addPerson(person);
            dispatch(fetchPersonSuccess(response));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

const getUserRequest = () => {
    return async function(dispatch) {
        try {
            dispatch(fetchRequest());
            const user = await api.getUser();
            dispatch(fetchUserSuccess(user));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

const loginRequest = user => {
    return async function(dispatch) {
        try {
            dispatch(fetchRequest());
            const login = await api.login(user);
            dispatch(fetchLoginSuccess(login));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

const logoutRequest = user => {
    return async function(dispatch) {
        try {
            dispatch(fetchRequest());
            const logout = await api.login(user);
            dispatch(fetchLogoutSuccess(logout));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

const registerRequest = user => {
    return async function(dispatch) {
        try {
            dispatch(fetchRequest());
            const register = await api.login(user);
            dispatch(fetchRegisterSuccess(register));
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
};

// Actions
const fetchRequest = () => {
    return {
        type: 'FETCH_REQUEST',
    }
};

const fetchFailure = error => {
    return {
        type: 'FETCH_FAILURE',
        payload: { error },
    }
};

const fetchPersonSuccess = person => {
    return {
        type: 'FETCH_PERSON_SUCCESS',
        payload: { person },
    }
};

const fetchUserSuccess = user => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: { user },
    }
};

const fetchLoginSuccess = login => {
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: { login },
    }
};

const fetchLogoutSuccess = login => {
    return {
        type: 'FETCH_LOGOUT_SUCCESS',
        payload: { login },
    }
};

const fetchRegisterSuccess = user => {
    return {
        type: 'FETCH_REGISTER_SUCCESS',
        payload: { user },
    }
};

// Middlewares
const middlewares = applyMiddleware(thunk);
const store = createStore(appReducer, middlewares);

export { store as default,
    getPersonRequest,
    getUserRequest,
    insertPerson,
    loginRequest,
    logoutRequest,
    registerRequest,
}
