import { combineReducers } from 'redux';
import cart from './cart';
import items from './items';
import modals from './modals';
import { registrationValidationReducer } from './registrationValidationReducer';
import { userLoginReducer } from './userLoginReducer';

const rootReducer = combineReducers({
    items,
    cart,
    modals,
    registrationValidationReducer,
    userLoginReducer
});

export default rootReducer;
