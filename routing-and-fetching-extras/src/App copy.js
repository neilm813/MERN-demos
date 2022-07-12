import { Link, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import { Launches, OneLaunch, NotFound } from './views';

function App() {
  return (
    <div style={{ width: '80%', margin: '0 auto', paddingTop: '0.75rem' }}>
      <header>
        <nav className="text-center">
          <Link to="/launches">Launches</Link> |{' '}
          <Link to="/launches/5eb87d13ffd86e000604b360">Famous Launch</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Navigate to="/launches" />} />

        {/* Nest routes that have a shared entity name */}
        <Route path="/launches">
          <Route index element={<Launches />} />
          <Route path=":id" element={<OneLaunch />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
