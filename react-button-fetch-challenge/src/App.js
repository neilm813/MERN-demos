import { useState } from 'react';

import './App.css';
import { getErrorResponse, getUsers } from './services';
import { LoadingSpinner, ShowError, User } from './components';

const App = () => {
  const [users, setUsers] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsersClick = () => {
    setIsLoading(true);

    // getErrorResponse()
    getUsers()
      .then((data) => setUsers(data.users))
      .catch((error) => setUsersError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <button onClick={handleGetUsersClick} type="button">
          {users === null ? 'Get' : 'Refresh'} Users
        </button>
      </div>

      {isLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <LoadingSpinner />
        </div>
      )}

      <ShowError error={usersError} />

      {users && (
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </section>
      )}
    </div>
  );
};

export default App;
