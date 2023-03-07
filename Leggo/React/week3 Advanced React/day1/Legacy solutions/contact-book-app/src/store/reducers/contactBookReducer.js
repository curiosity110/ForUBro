import { v4 as uuidv4 } from 'uuid';

import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from '../types'

const initialState = {
    contacts: [
      {
        id: uuidv4(),
        firstName: 'John',
        lastName: 'Doe',
        address: 'Zurich',
        phoneNumber: '+41...',
        avatar: 'react-logo.png',
        avatarName: 'react-logo.png'
      },
      {
        id: uuidv4(),
        firstName: 'Jane',
        lastName: 'Doe',
        address: 'Zurich',
        phoneNumber: '+41...',
        avatar: 'react-logo.png',
        avatarName: 'react-logo.png'
      }
    ]
  }

const contactBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
          return { contacts: [...state.contacts, action.payload] }
        }

        case DELETE_CONTACT: {
          const indexOfContactToDelete = state.contacts.findIndex(contact => contact.id === action.payload.id);
          const updatedcontacts = [...state.contacts];
          updatedcontacts.splice(indexOfContactToDelete, 1);
          return { contacts: updatedcontacts };
        }

        case UPDATE_CONTACT: {
          const indexOfContactToUpdate = state.contacts.findIndex(contact => contact.id === action.payload.id);
          const updatedcontacts = [...state.contacts];
          updatedcontacts[indexOfContactToUpdate] = action.payload;
          return { contacts: updatedcontacts };
        }

        default:
          return state;
    }
}

export default contactBookReducer;
