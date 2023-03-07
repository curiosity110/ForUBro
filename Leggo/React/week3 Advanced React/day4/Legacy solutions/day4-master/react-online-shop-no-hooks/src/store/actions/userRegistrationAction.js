import { baseUrl } from "../constants";

export const userRegistrationAction = email => async (dispatch, getState) => {
  
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  const body = JSON.stringify(email);
  const config = {
    headers,
    body,
    method: 'POST'
  };

  const response = await fetch(`${baseUrl}/backend/api/auth/registration/`, config);
  if(response.status === 200) return null;
  const data = await response.json();
  const keys = Object.keys(data)
  return { detail: data[keys[0]]};
};
