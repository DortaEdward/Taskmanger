import {useEffect, useRef} from 'react'
import { useContext } from "react";
import { BoardsContext } from '../../context/board';
import { getBoards } from '../../api';

import './styles.css';
import BoardCard from '../Board';

function Boards({ user }) {
  const { boards, loading, dispatch } = useContext(BoardsContext);
  const boardName = useRef('');

  useEffect(()=>{
    const getBoardsCall = async () => {
      if(localStorage.getItem('token') && localStorage.getItem('token') != null){
        await getBoards(user._id, dispatch);
      }
    };
    getBoardsCall();
  },[])

  return (
    <div className='board-container'>
      <form className='create-board-card'>
        <h3> Create A board </h3>
        <input type="text" placeholder='Board Name' ref={boardName} />
        <button type="submit">Create Board</button>
      </form>
      {
        boards && boards.length > 0
        ? 
        
          boards.map((board) => {
            return(
              <BoardCard board={board} key={board._id}/>
            )
          })
        :
          <>
            {
              loading
              ? <>Loading</>
              : <></>
            }
          </>
      }
    </div>
  )
}

export default Boards