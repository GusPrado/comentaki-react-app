import React, { useState, useContext } from 'react'
import firebase from './firebase'

import { AuthContext } from './auth'

import { useDatabasePush } from './database'

const NewComment = () => {
  const [,save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')
  const auth = useContext(AuthContext)
  if (auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [altDisplayName] = auth.user.email.split('@')

  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || altDisplayName
        }
      })
      setComment('')
    }
  }

  return (
    <div className="new-comment">
      <textarea className="form-control" placeholder="Seu comentário..." value={comment} onChange={evt => setComment(evt.target.value)}/>
      <button className="btn btn-lg btn-outline-light" onClick={createComment}>Comentar</button>
    </div>
  )
}

export default NewComment