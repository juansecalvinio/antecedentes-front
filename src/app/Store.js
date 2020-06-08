import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from '../reducer';
import { persistStore, persistReducer } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'userSession',
    storage: session,
    whitelist: ['sesion'],
    stateReconciler: autoMergeLevel1
};

const pReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(pReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export const persistor = persistStore(store);