import React from 'react';
import SignUp from './signup';
import Login from './login';
import './App.css';
import {Account} from './account';
import Status from './status';

function App() {
  return (
    <Account>
      <Status />
      <div style={{border: '1px solid', marginBottom: '20px'}}>
        <h1>Register Form</h1>
        <SignUp />
      </div>

      <div style={{border: '1px solid', marginTop: '40px'}}>
        <h1>Login Form</h1>
        <Login />
      </div>
    </Account>
  );
}

export default App;
