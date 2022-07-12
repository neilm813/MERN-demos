import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.spacexdata.com/v4/launches')
      .then((res) => {
        const launchesWithImages = res.data.filter(
          (launch) => launch.links.flickr.original.length > 0
        );

        setLaunches(launchesWithImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (launches === null) {
    return 'Loading';
  }

  return (
    <div className="flex-col align-items-center text-center">
      {launches.map((launch) => {
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
