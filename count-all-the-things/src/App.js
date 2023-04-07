import './App.css';

import { useState } from 'react';

import Counter from './components/Counter';
import NewCounterForm from './components/NewCounterForm';

function App() {
  const [counters, setCounters] = useState([
    {
      title: 'Studious Students',
      imageUrl: 'https://media.tenor.com/8yQGBBHCHlcAAAAM/boy-math.gif',
      startCount: 17,
    },
    {
      title: 'I get it!',
      imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/043/201/Fap7P42XkAEcb3c.jpg',
    },
    {
      title: 'Sheep',
      imageUrl: 'https://i.pinimg.com/originals/54/17/bb/5417bb438093abc11d42c8e26891f511.jpg',
    },
    {
      title: 'Bugs Crushed',
      imageUrl:
        'https://media.cnn.com/api/v1/images/stellar/prod/130806172900-north-carolina-bugfest.jpg?q=x_0,y_308,h_1383,w_2459,c_crop/w_800',
    },
    {
      title: 'Fun Video Games',
      imageUrl:
        'https://external-preview.redd.it/7_gVt7ZOXMFDY_gtptU8LNCBpegIXZn8L9BKh0e-xY8.jpg?auto=webp&s=933d8a8142d1526ce79dc4a801012ce265bd72b7',
    },
    {
      title: 'Half Rotations',
      imageUrl: 'https://study.com/cimages/multimages/16/180_angle2483887147979442891.png',
      step: 180,
    },
  ]);

  const handleDeleteCounterClick = (event, idxToDelete) => {
    const filteredCounters = counters.filter((counterData, i) => {
      const shouldDelete = idxToDelete === i;

      if (shouldDelete) {
        // Return false to remove the item from the new array .filter is creating.
        return false;
      }

      return true;
    });

    setCounters(filteredCounters);
  };

  const addNewCounter = (newCounter) => {
    // Create a new array with the newCounter at the front then copy all the other counter objects after it.
    // When your state is an object or an array, the set state function won't re-render unless you pass in a NEW object or
    // array. DO NOT MUTATE state directly, copy -> update -> set state.
    const updatedCounters = [newCounter, ...counters];
    setCounters(updatedCounters);
  };

  return (
    <div className="min-h-screen text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900">
      <header>
        <h1 className="text-center text-5xl font-extrabold mb-5 pt-5">Keep Calm and Count On</h1>
        <p className="text-center">
          <small>Not everything that can be counted matters; not everything that matters can be counted.</small>
        </p>
      </header>

      <NewCounterForm addNewCounter={addNewCounter} />

      <hr className="h-px my-8 bg-gray-200 dark:bg-gray-700 border-0 " />

      <div className="container mx-auto">
        <main className="flex flex-col justify-items-center items-center">
          {counters.map((data, i) => {
            return (
              <Counter
                key={`${i}-${data.title}`}
                counterData={data}
                handleDeleteCounterClick={handleDeleteCounterClick}
                index={i}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
