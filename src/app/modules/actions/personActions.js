import { PersonServices } from './../services/personServices';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

const personServices = new PersonServices();

export function fetchPersons() {
    return async function (dispatch) {
        try {
            dispatch(fetchRequest());
            const response = await personServices.getPersons();
            const { data, error } = response;
            if(data) {
                dispatch({ type: 'FETCH_PERSONS', payload: { data } });
                dispatch(fetchSuccess());
            } else {
                dispatch(fetchFailure(error));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}

export function fetchPersons(cuit) {
    return async function (dispatch) {
        try {
            dispatch(fetchRequest());
            const response = await personServices.getPersonByCuit(cuit);
            const { data, error } = response;
            if(data) {
                dispatch({ type: 'FETCH_PERSON', payload: { data } });
                dispatch(fetchSuccess());
            } else {
                dispatch(fetchFailure(error));
            }
        } catch (error) {
            dispatch(fetchFailure(error));
        }
    }
}