import React from 'react';

import { AuthProvider } from './auth'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SigninUser from './SigninUser'


function App() {
 
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SigninUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
