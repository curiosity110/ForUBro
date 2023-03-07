import { USER_REGISTRATION } from "../actionTypes";

const initState = {
    email: '',	
    code: '',	
    username: '',
    password: '',	
    password_repeat: '',	
    first_name: '',	
    last_name: ''
}
export const registrationValidationReducer = (state = initState, action) => {
    switch(action.type) {
        case USER_REGISTRATION:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}