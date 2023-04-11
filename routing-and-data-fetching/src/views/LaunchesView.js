import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function LaunchesView(props) {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    console.log('useEffect in LaunchesView');

    setIsLoading(true);

    axios
      .get(`https://api.spacexdata.com/v5/launches`)
      .then((res) => {
        console.log(res.data);

        // This filtering is not needed, it's just so we can find the ones with pretty pictures
        const launchesWithImages = res.data.filter((launch) => {
          return launch.links.flickr.original.length > 0;
        });

        setLaunches(launchesWithImages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);

        // If the api responded and sent back a message in the data, use that, otherwise, use the axios error message.
        // The ?. is optional chaining, it let's you access keys that may not exist without causing an error.
        setFetchError(error?.response?.data?.message || error.message);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-3">All Launches</h2>
      {isLoading && <p className="text-center my-3">Loading...</p>}
      {fetchError && <p className="text-red-500 bold text-center my-3">{fetchError}</p>}

      <hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />

      {launches.map((launch) => {
        return (
          <div
            key={launch.id}
            className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 rounded-lg shadow mb-5  mx-auto max-w-md"
          >
            <div className="p-5">
              {/*
              Or if you were not using a Link and wanted to navigate onClick, you could import useNavigate and call
              navigate(`/launches/${launch.id}`); onClick
              */}
              <Link to={`/launches/${launch.id}`} className="bold text-blue-600 dark:text-blue-500 hover:underline">
                <h3 className="text-2xl text-center font-bold mb-3">{launch.name}</h3>
              </Link>
              <p>{launch.details}</p>

              {launch.crew.length > 0 && <h4 className="text-xl text-center font-bold my-3">Crew:</h4>}

              {launch.crew.map((crewData) => {
                console.log(launch.name);
                return (
                  <p>
                    <Link
                      to={`/crews/${crewData.crew}`}
                      className="bold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {crewData.role}
                    </Link>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
