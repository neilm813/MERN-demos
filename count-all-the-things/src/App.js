import './App.css';

import { useState } from 'react';

import Counter from './components/Counter';

function App() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [startCount, setStartCount] = useState(0);
  const [step, setStep] = useState(1);

  const [titleValidationError, setTitleValidationError] = useState('Required field.');
  const [imageUrlValidationError, setImageUrlValidationError] = useState('Required field.');

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

  const handleSubmitNewCounter = (event) => {
    // Prevent the default form submit page refresh behavior.
    event.preventDefault();

    const newCounter = {
      // Long-form - keyName: value
      title: title,
      // Shorthand - can be used when the key name matches the name of the var used for the value
      imageUrl,
      startCount,
      step,
    };

    // Create a new array with the newCounter at the front then copy all the other counter objects after it.
    // When your state is an object or an array, the set state function won't re-render unless you pass in a NEW object or
    // array. DO NOT MUTATE state directly, copy -> update -> set state.
    const updatedCounters = [newCounter, ...counters];
    setCounters(updatedCounters);

    console.log(newCounter);
    // Reset the form state, this REQUIRES adding the value attribute to the <input />
    setTitle('');
    setImageUrl('');
    setStartCount(0);
    setStep(1);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);

    if (event.target.value.length < 2) {
      setTitleValidationError('Minimum length is 2.');
    } else {
      setTitleValidationError('');
    }
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);

    const regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

    if (event.target.value.match(regex)) {
      setImageUrlValidationError('');
    } else {
      setImageUrlValidationError('Invalid format.');
    }
  };

  const areAnyValidationErrors = Boolean(titleValidationError || imageUrlValidationError);

  return (
    <div className="min-h-screen text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900">
      <header>
        <h1 className="text-center text-5xl font-extrabold mb-5 pt-5">Keep Calm and Count On</h1>
        <p className="text-center">
          <small>Not everything that can be counted matters; not everything that matters can be counted.</small>
        </p>
      </header>

      <form
        onSubmit={(event) => {
          handleSubmitNewCounter(event);
        }}
        className="w-1/5 mx-auto mt-9 p-8 rounded border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-bold text-center mb-6">Add A Counter</h3>

        <div className="mb-6">
          <label htmlFor="new-counter-title" className="block mb-2 text-lg font-medium">
            Title
          </label>
          <input
            onChange={(event) => {
              handleTitleChange(event);
            }}
            value={title}
            type="text"
            id="new-counter-title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {titleValidationError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-600">{titleValidationError}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="new-counter-imageUrl" className="block mb-2 text-lg font-medium">
            Image Url
          </label>
          <input
            onChange={(event) => {
              handleImageUrlChange(event);
            }}
            value={imageUrl}
            type="text"
            id="new-counter-imageUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {imageUrlValidationError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-600">{imageUrlValidationError}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="new-counter-startCount" className="block mb-2 text-lg font-medium">
            Start Count
          </label>
          <input
            onChange={(event) => {
              setStartCount(event.target.value);
            }}
            value={startCount}
            type="number"
            id="new-counter-startCount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="new-counter-step" className="block mb-2 text-lg font-medium">
            Step
          </label>
          <input
            onChange={(event) => {
              setStep(event.target.value);
            }}
            value={step}
            type="number"
            id="new-counter-step"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button
          disabled={areAnyValidationErrors}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <hr className="h-px my-8 bg-gray-200 dark:bg-gray-700 border-0 " />

      <div className="container mx-auto">
        <main className="flex flex-col justify-items-center items-center">
          {counters.map((data, i) => {
            return <Counter key={`${i}-${data.title}`} counterData={data} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
