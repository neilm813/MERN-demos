import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import DestinationsView from './views/DestinationsView';
import EditDestinationView from './views/EditDestinationView';
import NewDestinationView from './views/NewDestinationView';
import NotFoundView from './views/NotFoundView';
import OneDestinationView from './views/OneDestinationView';

function App() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
        <Link to="/destinations">Destinations</Link>
        <Link to="/destinations/new">New Destination</Link>
      </nav>
      <hr />

      <main style={{ maxWidth: '80%', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Trip Planner</h1>
        {/* Paths here should NOT include /api, in react only use /api when making axios request */}
        {/* Render the view that matches the URL here: */}
        <Routes>
          <Route path="/destinations" element={<DestinationsView />} />
          <Route path="/destinations/new" element={<NewDestinationView />} />
          <Route path="/destinations/:id/edit" element={<EditDestinationView />} />
          <Route path="/destinations/:id" element={<OneDestinationView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
