import React from 'react';

import { AuthProvider } from './auth'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SigninUser from './SigninUser'
import Header from './Header'


function App() {
 
  return (
    <AuthProvider>
      <div className="container text-center">
        <Header />
        <UserInfo />
        <NewComment />
        <Comments />
        <div className="login-container">
          <div className="row">
            <SigninUser />
            <CreateUser />
          </div>
        </div>        
      </div>  
    </AuthProvider>
  );
}

export default App;
