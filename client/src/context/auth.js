import { createContext, useReducer } from "react";

// initial state
const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null
};

// actions
export const LoginStart = (user) => ({
  type:'LOGIN_START',  
})

export const LoginFetch = (user) => ({
  type:'LOGIN_SUCCESS',
  payload: user,
})

export const LoginFailure = (error) => ({
  type:'LOGIN_FAILURE',
  payload: error
})

export const UserStart = (user) => ({
  type:'USER_FETCH_START',
})

export const UserFetch = (user) => ({
  type:'USER_FETCH_SUCCESS',
  payload: user,
})

export const UserFailure = (error) => ({
  type:'USER_FETCH_FAILURE',
  payload: error
})

// reducer
const AuthReducer = (state, action) => {
  switch(action.type){
    case "LOGIN_START":
      return{
        loading: true,
        error:null,
      }
    case "LOGIN_SUCCESS":
      return{
        loading: false,
        error:null,
      }
    case "LOGIN_FAILURE":
      return{
        loading: false,
        error: action.payload,
      }
    case "USER_FETCH_START":
      return{
        user: null,
        loading: true,
        error:null,
      }
    case "USER_FETCH_SUCCESS":
      return{
        user: action.payload,
        loading: false,
        error:null,
      }
    case "USER_FETCH_FAILURE":
      return{
        user: null,
        loading: false,
        error: action.payload,
      }
    
    default:
      return state;
  }
};

export const AuthContext = createContext(INITIAL_STATE);

// context provider
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return(
    <AuthContext.Provider value={{
      user: state.user,
      loading: state.loading,
      error: state.error,
      dispatch
    }}>
      { children }
    </AuthContext.Provider>
  )
};
