import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const SigninUser = () => {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    passwd: ''
  })
  const handleChange = field => evt => {
    setForm({
      ...form,
      [field]: evt.target.value
    })
  }

  if (auth.user !== null) {
    return null
  }

  return (
    <>
      <h3>Entrar na sua conta</h3>
      {
        auth.signInUser.signInUserState.error !== '' &&
        <p>{auth.signInUser.signInUserState.error}</p>
      }
      {/* {JSON.stringify(auth.signInUser.signInUserState)} */}
      <input type="text" placeholder="Seu e-mail" value={form.email} onChange={handleChange('email')} />
      <input type="password" placeholder="Sua senha" value={form.passwd} onChange={handleChange('passwd')} />
      <button onClick={() => {
        auth.signInUser.signInUser(form.email, form.passwd)
      }}>Entrar</button>
    </>
  )
}

export default SigninUser
