import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Launches = (props) => {
  /* 
  Destructure array syntax notation that is shorthand for:
  const launchesStateArr = useState(null);
  const launches = launchesStateArr[0];
  const setLaunches = launchesStateArr[1];
  */
  const [launches, setLaunches] = useState(null);

  // Empty array as second argument means run this only on the first loading of the component.
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((res) => {
        const launchesWithImages = res.data.filter((launch) => {
          // The question marks are called optional chaining, if any key doesn't exist we will get undefined instead of an error.
          return launch.links.flickr.original.length !== 0;
        });

        setLaunches(launchesWithImages);
        console.log(launchesWithImages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (launches === null) {
    return "Loading...";
  }

  return (
    <div className="flex-col align-items-center">
      <h2>All Launches</h2>
      {launches.map((launch) => {
        return (
          <div
            key={launch.id}
            className="w-25pct mb-md shadow rounded p-md pb-lg"
          >
            <h3>
              <Link to={"/launches/" + launch.id}>{launch.name}</Link>
            </h3>
            <p>Launch Date: {launch.date_local}</p>
            <small>{launch.details}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
