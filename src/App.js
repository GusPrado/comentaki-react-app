import React from 'react';

import NewComment from './NewComment'
import Comments from './Comments'

//create account
/*firebase
  .auth()
  .createUserWithEmailAndPassword('gustavo.gpprado@gmail.com', 'abc123')
  .then(user => {
    return user.updateProfile({
      displayName: 'Gus Prado'
    })
  })*/

//set username
// firebase.auth().onAuthStateChanged(user => {
//   if(user) {
//     user.updateProfile({ displayName: 'Gus Prado' })
//   }
// })



function App() {
 
  return (
    <div>
      <NewComment />
      {<Comments />}
    </div>
  );
}

export default App;
