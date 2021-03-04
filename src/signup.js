import React, {useState} from 'react';
import UserPool from './UserPool';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
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
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
