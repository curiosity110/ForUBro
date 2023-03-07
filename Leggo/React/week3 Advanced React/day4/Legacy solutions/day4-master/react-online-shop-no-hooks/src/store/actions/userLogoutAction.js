import { USER_LOGOUT } from '../actionTypes';

export const logOutAction = () => {
  localStorage.clear();
  return {
    type: USER_LOGOUT,
    payload: ''
  };
};