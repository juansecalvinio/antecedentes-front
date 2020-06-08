export const fetchRequest = () => {
    return {
        type: 'FETCH_REQUEST',
    }
}

export const fetchSuccess = () => {
    return {
        type: 'FETCH_SUCCESS',
    }
}

export const fetchFailure = error => {
    return {
        type: 'FETCH_FAILURE',
        payload: { error },
    }
}

export const login = () => {
    return {
        type: 'LOGIN'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}