import { combineReducers } from 'redux';
import loader from './app/shared/components/loader/redux/Reducer';
import { appReducer } from './app/modules/reducers/appReducer';
import { userReducer } from './app/modules/reducers/userReducer';
import { personReducer } from './app/modules/reducers/personReducer';

export default combineReducers({
    loader,
    appReducer,
    userReducer,
    personReducer
});