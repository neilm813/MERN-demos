import { useEffect, useState } from 'react';
import axios from 'axios';

import Spinner from './Spinner';
import OneLaunch from './OneLaunch';

export default function OneLaunchContainer(props) {
  const { id } = props;

  const [launch, setLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  /* 
  With the empty array, this effect will run only once when the component is mounted.
  If the empty array is removed, this effect will run every time the component is re-rendered.
  */
  useEffect(() => {
    console.log('useEffect in OneLaunch');

    setIsLoading(true);

    axios
      .get(`https://api.spacexdata.com/v5/launches/${id}`)
      .then((res) => {
        console.log(res.data);

        // Delay the setting of state to test the loading content being displayed longer.
        // The timeout is not NEEDED, it's for testing.
        setTimeout(() => {
          setLaunch(res.data);
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        // If the api responded and sent back a message in the data, use that, otherwise, use the axios error message.
        // The ?. is optional chaining, it let's you access keys that may not exist without causing an error.
        setFetchError(error?.response?.data?.message || error.message);
      });
  }, [id]);

  return (
    <div className="w-3/5 bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-lg shadow mb-5">
      <h2 className="text-3xl text-center font-bold my-3">Launch Details</h2>
      <hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />

      {isLoading && (
        <div className="text-center p-3">
          <Spinner className="h-20 w-20" />
        </div>
      )}

      {fetchError && <p className="text-red-500 bold text-center my-3">{fetchError}</p>}

      <OneLaunch launch={launch} />
    </div>
  );
}
