import React from 'react'

function BoardCard({ board }) {
  return (
    <div>
      {JSON.stringify(board)}
    </div>
  )
}

export default BoardCard