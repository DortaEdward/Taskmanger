import { createContext, useReducer } from "react";

// initial state
const INITIAL_STATE = {
  boards: [],
  loading: false,
  error: null
};


// actions
export const RETRIEVEBOARDSStart = () => ({
  type:'RETRIEVE_BOARDS_START',  
})

export const RETRIEVEBOARDSFetch = (boards) => ({
  type:'RETRIEVE_BOARDS_SUCCESS',
  payload: boards,
})

export const RETRIEVEBOARDSFailure = (error) => ({
  type:'RETRIEVE_BOARDS_FAILURE',
  payload: error
})


// reducer
const BoardsReducer = (state, action) => {
  switch(action.type){
    case "RETRIEVE_BOARDS_START":
      return{
        loading: true,
        error:null,
      }
    case "RETRIEVE_BOARDS_SUCCESS":
      return{
        boards: action.payload,
        loading: false,
        error:null,
      }
    case "RETRIEVE_BOARDS_FAILURE":
      return{
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export const BoardsContext = createContext(INITIAL_STATE);

export const BoardsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BoardsReducer, INITIAL_STATE);
  return(
    <BoardsContext.Provider value={{
      boards: state.boards,
      loading: state.loading,
      error: state.error,
      dispatch
    }}>
      { children }
    </BoardsContext.Provider>
  )
};
