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
        <div className="col-md-6 login-form">
          <h3>Entrar na sua conta</h3>
            {
              auth.signInUser.signInUserState.error !== '' &&
              <p className="alert alert-danger">{auth.signInUser.signInUserState.error}</p>
            }
            <div className="form-like">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Seu e-mail" value={form.email} onChange={handleChange('email')} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Sua senha" value={form.passwd} onChange={handleChange('passwd')} />
              </div>
              <div className="form-group">
                <button className="btnSubmit btn-block" onClick={() => { auth.signInUser.signInUser(form.email, form.passwd)
                  }}>
                    Entrar
                </button>
              </div>
            </div>       
          {/* {JSON.stringify(auth.signInUser.signInUserState)} */}         
        </div>
    </>
  )
}

export default SigninUser
