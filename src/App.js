import React from 'react';

import { AuthProvider } from './auth'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'


function App() {
 
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
      </div>
    </AuthProvider>
  );
}

export default App;
