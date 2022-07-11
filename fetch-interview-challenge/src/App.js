import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchClick = (_evt) => {
    setIsLoading(true);
    // fetch('http://httpstat.us/404')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
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
        {users === null ? 'Fetch Users' : 'Refresh Users'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <hr />
      {/* Does the project manager what old data still displayed if new fetch
      fails?
      */}
      <div>{users && users.map((user, i) => <p key={i}>{user.name}</p>)}</div>
    </div>
  );
}

export default App;
