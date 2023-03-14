import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { LoadingSpinner } from '../components/LoadingSpinner';

// Named export: import { Launches, Name2, Name3 } from './components/Launches';
export const Launches = (props) => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // empty array as arg2 makes useEffect only run on first render (mount).
  useEffect(() => {
    setIsLoading(true);

    // To test loading put entire axios call in a setTimeout
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((res) => {
        console.log(res);
        const launchesWithImages = res.data.filter((launch) => launch.links.flickr.original.length > 0);
        setLaunches(launchesWithImages);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // Whether the .then (success) or the .catch (error) happens, we are done loading.
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex-col align-items-center text-center">
      {isLoading && <LoadingSpinner />}

      {launches.map((launch) => {
        const { date_local, id, name } = launch;

        return (
          <div key={id} className="w-25pct mb-md shadow rounded">
            <h2>
              <Link to={`/launches/${id}`}>{name}</Link>
            </h2>
            <p>Date: {date_local}</p>
          </div>
        );
      })}
    </div>
  );
};

// Only 1 default per file: import Launches from './components/Launches';
// When importing default, you can name Launches anything.
export default Launches;
