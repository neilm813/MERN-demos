import axios from "axios";
import React, { useEffect, useState } from "react";

const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  // Empty array as second argument means run this only on the first loading of the component.
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((res) => {
        setLaunches(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (launches === null) {
    return "Loading...";
  }

  return (
    <div>
      <h2>All Launches</h2>
      {launches.map((launch) => {
        return <p key={launch.id}>{launch.name}</p>;
      })}
    </div>
  );
};

export default Launches;
