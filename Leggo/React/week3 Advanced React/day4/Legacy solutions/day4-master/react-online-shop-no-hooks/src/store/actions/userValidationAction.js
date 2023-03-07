import { baseUrl } from "../constants";
import { USER_REGISTRATION } from "../actionTypes";

const userValidation = data => ({
  type: USER_REGISTRATION,
  payload: data
});

export const userValidationAction = userData => async (dispatch, getState) => {
  
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(userData);

  const config = {
    headers,
    body,
    method: 'PATCH'
  };


  const response = await fetch(`${ baseUrl }/backend/api/auth/registration/validation/`, config);
  if(response.status === 200) return null;
  const data = await response.json();
  const keys = Object.keys(data)
  return  {[`${keys[0]}_detail`]: data[keys[0]]};
};




