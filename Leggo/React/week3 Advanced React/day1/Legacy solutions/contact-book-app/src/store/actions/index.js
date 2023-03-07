import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from '../types';

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}

export const updateContact = (contact) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}

export const deleteContact = (contact) => {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
}