import React, {useState, useContext, useEffect} from 'react';
import {AccountContext} from './account';

const Status = () => {
  const [status, setStatus] = useState(false);
  const {getSession, logout} = useContext(AccountContext);

  useEffect(() => {
    getSession().then(session => {
      console.log('Session', session);
      setStatus(true);
    });
  }, []);

  return (
    <h1>
      {status ? (
        <div>
          <h1>You are logged out</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        'Please login'
      )}
    </h1>
  );
};
export default Status;
