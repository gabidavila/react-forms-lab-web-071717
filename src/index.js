import React from 'react';
import ReactDOM from 'react-dom';

import LoginForm from './components/LoginForm';
import TwitterMessage from './components/TwitterMessage';
import PoemWriter from './components/PoemWriter';

function login({ username, password }) {
  console.log(`Logging in ${username} with password ${password}`);
}
//
// const rules = {
//   lines: 3,
//   words: {
//     1: 5,
//     2: 3,
//     3: 5
//   }
// }

ReactDOM.render(
  <div>
    <h1><pre>TwitterMessage</pre></h1>
    <TwitterMessage maxChars={140} />

    <h1><pre>LoginForm</pre></h1>
    <LoginForm onSubmit={login} />

    <h1><pre>PoemWriter</pre></h1>
    <PoemWriter/>
  </div>,
  document.getElementById('root')
);
