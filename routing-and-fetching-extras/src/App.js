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
        {/* How to do a redirect */}
        <Route path="/" element={<Navigate to="/launches" />} />

        <Route index path="/launches" element={<Launches />} />

        {/*
        :id is a URL param, it is a placeholder var name for some value
        that will be at that location of the URL when the URL is visited.

        The url param names here relate to the useParams names the component.
        */}
        <Route path="/launches/:id" element={<OneLaunch />} />
        {/*
          If none of the above routes match, use NotFound view.
        */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
