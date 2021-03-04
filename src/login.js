import React, {useState, useContext} from 'react';
import {AccountContext} from './account';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {authenticate} = useContext(AccountContext);
  const onSubmit = event => {
    event.preventDefault();
    authenticate(email, password)
      .then(data => {
        console.log('Logged in', data);
      })
      .catch(err => {
        console.error('Failed to login', err);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
