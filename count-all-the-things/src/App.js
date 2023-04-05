import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <div className="min-h-screen text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900">
      <header>
        <h1 className="text-center text-5xl font-extrabold mb-5 pt-5">Keep Calm and Count On</h1>
        <p className="text-center">
          <small>Not everything that can be counted matters; not everything that matters can be counted.</small>
        </p>
      </header>
      <hr className="h-px my-8 bg-gray-200 dark:bg-gray-700 border-0 " />

      <div className="container mx-auto">
        <main className="flex flex-col justify-items-center items-center">
          <Counter
            title="Studious Students"
            startCount={13}
            imageUrl="https://media.tenor.com/8yQGBBHCHlcAAAAM/boy-math.gif"
          />
          {/* The component is just a function and props is just an object of data passed in! */}
          {Counter({
            title: 'Studious Students',
            startCount: 13,
            imageUrl: 'https://media.tenor.com/8yQGBBHCHlcAAAAM/boy-math.gif',
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
