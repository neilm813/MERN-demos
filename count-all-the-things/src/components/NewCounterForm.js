import { useState } from 'react';

export default function NewCounterForm(props) {
  const { addNewCounter } = props;

  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [startCount, setStartCount] = useState(0);
  const [step, setStep] = useState(1);

  const [titleValidationError, setTitleValidationError] = useState('Required field.');
  const [imageUrlValidationError, setImageUrlValidationError] = useState('Required field.');

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

    addNewCounter(newCounter);
    // props.addNewCounter(newCounter);

    console.log(newCounter);
    // Reset the form state, this REQUIRES adding the value attribute to the <input />
    setTitle('');
    setImageUrl('');
    setStartCount(0);
    setStep(1);
  };

  const areAnyValidationErrors = Boolean(titleValidationError || imageUrlValidationError);

  return (
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
        {titleValidationError && <p className="mt-2 text-sm text-red-600 dark:text-red-600">{titleValidationError}</p>}
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
  );
}
