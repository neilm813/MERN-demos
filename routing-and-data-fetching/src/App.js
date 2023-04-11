import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import OneCrewView from './views/OneCrewView';
import HomeView from './views/HomeView';
import OneLaunchView from './views/OneLaunchView';
import LaunchesView from './views/LaunchesView';

function App() {
  return (
    <div className="min-h-screen text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900">
      <header
        className="flex flex-col justify-center items-center mb-5 border-b-2 border-slate-700"
        style={{
          backgroundImage:
            'url(https://images.immediate.co.uk/production/volatile/sites/4/2022/07/Main-image-small-7fd6090.jpg)',
          height: '300px',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-extrabold mb-5 pt-5">The Universe</h1>
        <q className="text-xl bold italic">What a concept.</q>
        <nav className="bg-slate-900 p-5 rounded-lg">
          <Link to="/" className="bold text-blue-600 dark:text-blue-500 hover:underline">
            Home
          </Link>{' '}
          |{' '}
          <Link to="/launches" className="bold text-blue-600 dark:text-blue-500 hover:underline">
            Launches
          </Link>{' '}
          |{' '}
          <Link
            to="/launches/5eb87d13ffd86e000604b360"
            className="bold text-blue-600 dark:text-blue-500 hover:underline"
          >
            Famous Launch
          </Link>
        </nav>
      </header>

      <main className="container mx-auto">
        {/* The view component that matches the url will be displayed here */}
        <Routes>
          <Route path="" element={<HomeView />} />
          <Route path="/crews/:id" element={<OneCrewView />} />
          <Route path="/launches/:id" element={<OneLaunchView />} />
          <Route path="/launches" element={<LaunchesView />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
