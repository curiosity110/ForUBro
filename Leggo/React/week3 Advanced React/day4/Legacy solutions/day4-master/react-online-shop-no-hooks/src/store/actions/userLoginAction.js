import { baseUrl } from "../constants";
import { USER_LOGIN } from "../actionTypes";

export const userLoginAction = user => ({
  type: USER_LOGIN,
  payload: user
});

export const userLogin = credentials => async (dispatch, getState) => {
 
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(credentials);

  const config = {
    headers,
    body,
    method: 'POST'
  };

  const response = await fetch(`${ baseUrl }/backend/api/auth/token/`, config);
  const data = await response.json();
  

  if(response.status === 200) {
    const { access } = data;
    localStorage.setItem('token', access)
    dispatch(userLoginAction({ user: data, authenticated: true }));
    return null;
  }
  dispatch(userLoginAction({ user: '', authenticated: false }));
  
  return data;
};