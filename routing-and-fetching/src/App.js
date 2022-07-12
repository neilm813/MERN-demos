import { Link, Navigate, Route, Routes } from 'react-router-dom';

import './App.css';

import { Launches } from './views/Launches';
import { OneLaunch } from './views/OneLaunch';
import { NotFound } from './views/NotFound';

function App() {
  return (
    <fieldset style={{ width: '80%', margin: '0 auto' }}>
      <legend>App.js</legend>
      <header>
        <nav className="text-center">
          <Link to="/launches">Launches</Link>
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
    </fieldset>
  );
}

export default App;
