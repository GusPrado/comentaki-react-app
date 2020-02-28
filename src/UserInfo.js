import React, { useState, useContext } from 'react'

import { AuthContext } from './auth'

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName)
  const handleChange = evt => {
    setNewDisplayName(evt.target.value)
  }
  const handleSave = () => {
    if (newDisplayName !== ''){
      user.updateProfile({ displayName: newDisplayName })
    }
  }

  return (
    <>
      <input type="text" className="form-control" value={newDisplayName} onChange={handleChange}/>
      <button className="btn btn-outline-light" onClick={handleSave}>Salvar apelido</button>
    </>
  )
}

const UserInfo = () => {
  const auth = useContext(AuthContext)

  if (auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [altDisplayName] = auth.user.email.split('@')
  const dn = displayName || altDisplayName

  return (
    <div className="user-info">
      <h2>Olá {dn}!</h2>
      <FormDisplayName displayName={dn} user={auth.user}/>
      <button className="btn btn-outline-light" onClick={auth.signout}>Sair</button>
    </div>

  )
}

export default UserInfo