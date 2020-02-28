import React, { useContext, useState } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
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
        <div className="col-md-6 login-form">
          <h3>Criar nova conta</h3>
          {
            auth.createUser.createUserState.error !== '' &&
            <p className="alert alert-danger">{auth.createUser.createUserState.error}</p>
          }
          <div className="form-like">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Seu e-mail" value={form.email} onChange={handleChange('email')} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Sua senha" value={form.passwd} onChange={handleChange('passwd')} />
            </div>
            <div className="form-group">
              <button className="btnSubmit btn-block" onClick={() => {
                auth.createUser.createUser(form.email, form.passwd)
                }}>
                  Criar conta
              </button>
            </div>
          </div>
        </div>   
      {/* {JSON.stringify(auth.createUser.createUserState)} */}   
    </>
  )
}

export default CreateUser
