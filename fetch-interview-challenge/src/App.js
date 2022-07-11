import { useState } from 'react';
import './App.css';

import RingLoader from 'react-spinners/RingLoader';

import { UserTable } from './components';
import { getUsers } from './services/httpService';

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchClick = (_evt) => {
    setIsLoading(true);
    getUsers()
      .then((users) => {
        setUsers(users);
        setError(null);
        console.log(users);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // If this were a larger project, I would use a CSS-in-js library.
  return (
    <div style={{ maxWidth: '85%', margin: '0 auto' }}>
      <button
        onClick={handleFetchClick}
        style={{
          padding: 5,
          fontSize: 22,
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        {users === null ? 'Fetch Users' : 'Refresh Users'}{' '}
        <RingLoader loading={isLoading} color="aquamarine" size={20} />
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <hr />
      {/* Does the project manager what old data still displayed if new fetch
      fails?
      */}
      <UserTable users={users} />
    </div>
  );
}

export default App;
