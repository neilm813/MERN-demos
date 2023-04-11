import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function OneLaunchView(props) {
  // console.log('OneLaunch props:', props);
  const { id } = useParams();

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
    <div className="w-full bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-lg shadow mb-5">
      <h2 className="text-center text-4xl font-extrabold mb-5 pt-5">Launch Details</h2>

      {isLoading && <p className="text-center my-3">Loading...</p>}
      {fetchError && <p className="text-red-500 bold text-center my-3">{fetchError}</p>}

      {launch !== null && (
        <div>
          <div className="p-5 mb-3">
            <h2 className="text-3xl text-center font-bold mb-3">{launch.name}</h2>
            <p>{launch.details}</p>
          </div>

          {launch.links.flickr.original.map((url) => {
            return <img src={url} className="w-full" alt="Launch" />;
          })}
        </div>
      )}
    </div>
  );
}
