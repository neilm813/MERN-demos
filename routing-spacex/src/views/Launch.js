import React, { useEffect, useState } from "react";
import axios from "axios";

const Launch = (props) => {
  const [launch, setLaunch] = useState(null);

  // Empty array as second argument means run this only on the first loading of the component.
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches/" + props.id)
      .then((res) => {
        setLaunch(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  if (launch === null) {
    return "Loading...";
  }

  return (
    <div className="flex-col align-items-center text-center">
      <h2>{launch.name}</h2>
      <p>Launch Date: {launch.date_local}</p>
      <small className="mb-md">{launch.details}</small>

      {/* You can use optional chaining to safely access a deeply nested key even if some key along the path does not exist: 
      
      launch?.links?.flickr?.original?.map?.()
       */}

      {launch.links.flickr.original.map((src) => {
        return (
          <img
            className="shadow-img rounded mb-md"
            src={src}
            alt="Launch"
            width="60%"
          />
        );
      })}

      {launch.links.youtube_id && (
        <iframe
          className="shadow-img rounded mb-md"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${launch.links.youtube_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {launch.links.article && (
        <iframe
          className="shadow-img rounded"
          width="60%"
          height="800"
          src={launch.links.article}
          title="Article"
        ></iframe>
      )}
    </div>
  );
};

export default Launch;
