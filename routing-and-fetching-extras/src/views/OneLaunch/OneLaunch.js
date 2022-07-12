import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PacmanLoader from 'react-spinners/PacmanLoader';

import { getOneLaunch } from 'services/spaceXService';
import { usePromise } from 'hooks';

export const OneLaunch = (props) => {
  // This param name matches the param name in the path that routes to here.
  const { id } = useParams();

  const {
    isLoading,
    data: launch,
    error,
    refresh,
  } = usePromise(useCallback(() => getOneLaunch(id), [id]));

  if (isLoading) {
    return <PacmanLoader loading={isLoading} />;
  }

  return (
    <div className="flex-col align-items-center text-center">
      {error && <p>{error.message}</p>}
      {launch && (
        <>
          <h2>{launch.name}</h2>
          <h4>Date</h4>
          <p>{launch.date_local}</p>
          <h4>Details</h4>
          <p>{launch.details}</p>

          {launch.links.flickr.original.map((url, i) => {
            return (
              <img
                key={i}
                src={url}
                alt={launch.name}
                className="shadow-img rounded mb-md"
                width="60%"
              />
            );
          })}

          {launch.links.article && (
            <iframe
              title="Launch Article"
              src={launch.links.article}
              width="50%"
              height="800"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          )}
        </>
      )}
    </div>
  );
};
