import { useState } from 'react';

export default function Counter(props) {
  // Props is a parameter that is an object of the passed-in data.
  const { counterData, handleDeleteCounterClick, index } = props;
  const { title, imageUrl, startCount = 0, step = 1 } = counterData;

  /* 
  useState is given an initial value to start our state with and then it returns an array that we destructure:
  [currentValue, functionToUpdateValue];

  Without destructuring, it would look like:

  const countStatePair = useState(0);
  const count = countStatePair[0];
  const setCount = countStatePair[1];
  */
  const [count, setCount] = useState(startCount);

  const countButtonClasses = `text-white bg-blue-700 hover:bg-blue-800 border focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"`;

  const resetButtonClasses = `text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-gray-400 dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-200`;

  const deleteButtonClasses =
    'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900';

  return (
    <div className="w-2/5 rounded-lg shadow mb-5 bg-white dark:bg-gray-800 border dark:border-gray-700 border-gray-200">
      {/* booleanCondition && 'return this if condition is truthy' */}
      {imageUrl && <img className="w-full rounded-t-lg" src={imageUrl} alt="counter" />}
      <div className="p-3">
        <h2 className="text-3xl text-center font-bold text-orange-400">{count}</h2>
        <h3 className="text-center text-2xl mb-3">{title}</h3>
        <div className="flex justify-center">
          <button
            onClick={(event) => {
              setCount(count + step);
            }}
            className={countButtonClasses}
          >
            Count
          </button>
          <button
            onClick={(event) => {
              setCount(startCount);
            }}
            className={resetButtonClasses}
          >
            Reset
          </button>
          <button
            onClick={(event) => {
              handleDeleteCounterClick(event, index);
            }}
            type="button"
            className={deleteButtonClasses}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
