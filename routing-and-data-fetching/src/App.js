import './App.css';

import OneLaunch from './components/OneLaunch';

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
      </header>

      <div className="container mx-auto">
        <main className="flex flex-col items-center">
          <OneLaunch id="5eb87d13ffd86e000604b360" />
        </main>
      </div>
    </div>
  );
}

export default App;
