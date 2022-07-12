import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PacmanLoader from 'react-spinners/PacmanLoader';

import { getAllLaunches } from 'services/spaceXService';
import { usePromise } from 'hooks';

export const Launches = (props) => {
  const {
    isLoading,
    data: launches,
    error,
    refresh,
  } = usePromise(useCallback(() => getAllLaunches(), []));

  return (
    <div className="flex-col align-items-center text-center">
      <h2>All Launches</h2>
      <PacmanLoader loading={isLoading} />
      {error && <p>{error.message}</p>}

      {launches &&
        launches.map((launch) => {
          return (
            <div key={launch.id} className="w-25pct mb-md shadow rounded">
              <Link to={`/launches/${launch.id}`}>
                <h2>{launch.name}</h2>
              </Link>
              <p>Date: {launch.date_local}</p>
            </div>
          );
        })}
    </div>
  );
};
