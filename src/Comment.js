import React from 'react'

import Time from './Time'

const Comment = ({ comment }) => {
  return (
    <>
      <h4>{comment.content}</h4> <em>por: {comment.user.name} em: <Time timestamp={comment.createdAt} /></em>
    </>
  )
}

export default Comment