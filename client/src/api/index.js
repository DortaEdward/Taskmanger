import axios from 'axios';

const authApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
});

const userApi = axios.create({
  baseUrl: `${process.env.REACT_APP_API_URL}`
})

export const loginCall = async (user, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const res = await authApi.post('/login',user);
    window.localStorage.setItem('token',res.data.token);
    dispatch({ type: 'LOGIN_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data.error });
  };
};

export const getUser = async (token, dispatch) => {
  dispatch({ type: 'USER_FETCH_START' });
  try {
    const config = { headers: {authorization: `Bearer ${token}`} }
    const { data } = await userApi.get(process.env.REACT_APP_API_URL, config);
    dispatch({ type: 'USER_FETCH_SUCCESS', payload: data });
  } catch (error) {
    const err = error.response.data.error || 'there was an error when getting user';
    if(err === 'jwt expired'){
      localStorage.removeItem('token');
    } else {
      dispatch({
        type: 'USER_FETCH_FAILURE',
        payload: err
      });
    }
  }
}