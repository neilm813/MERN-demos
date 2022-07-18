import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import Destination from './views/Destination';
import NewDestination from './views/NewDestination';
import EditDestination from './views/EditDestination';
import Destinations from './views/Destinations';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1>Cool Destination, Bro</h1>
        <div className="navbar-nav justify-content-between">
          <Link
            to="/destinations"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            All Destinations
          </Link>
          <Link
            to="/destinations/new"
            className="btn btn-sm btn-outline-primary mx-1"
          >
            New Destination
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/destinations" replace />} />
        <Route path="/destinations" index element={<Destinations />} />
        <Route path="/destinations/:_id/edit" element={<EditDestination />} />
        <Route path="/destinations/:_id" element={<Destination />} />
        <Route path="/destinations/new" element={<NewDestination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
