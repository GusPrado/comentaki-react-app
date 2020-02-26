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
      <input type="text" value={newDisplayName} onChange={handleChange}/>
      <button onClick={handleSave}>Save display name</button>
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
    <>
      <p>Olá {dn}</p>
      <FormDisplayName displayName={dn} user={auth.user}/>
      <button onClick={auth.signout}>Sair</button>
    </>

  )
}

export default UserInfo