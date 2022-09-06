import { useState } from 'react';

import './App.css';
import { getErrorResponse, getUsers } from './services';
import { User } from './components';

const App = () => {
  const [users, setUsers] = useState(null);
  const [usersError, setUsersError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsersClick = () => {
    setIsLoading(true);

    getUsers()
      .then((data) => setUsers(data.users))
      .catch((error) => setUsersError(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <button onClick={handleGetUsersClick} type="button">
        Get Users
      </button>

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
