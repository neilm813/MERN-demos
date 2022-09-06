import { useState } from 'react';

import './App.css';
import { getErrorResponse, getUsers } from './services';
import { LoadingSpinner, User } from './components';

const App = () => {
  const [users, setUsers] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsersClick = () => {
    setIsLoading(true);

    getUsers()
      .then((data) => setUsers(data.users))
      .catch((error) => setUsersError(error))
      .finally(() =>
        setTimeout(() => {
          setIsLoading(false);
        }, 3000)
      );
  };

  return (
    <div>
      <button onClick={handleGetUsersClick} type="button">
        Get Users
      </button>

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

      {users && (
        <section>
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </section>
      )}
    </div>
  );
};

export default App;
