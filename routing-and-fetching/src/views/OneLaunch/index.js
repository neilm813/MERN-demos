import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const OneLaunch = (props) => {
  // This param name matches the param name in the path that routes to here.
  const { id } = useParams();
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        setLaunch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (launch === null) {
    return 'Loading';
  }

  return (
    <div className="flex-col align-items-center text-center">
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
    </div>
  );
};
