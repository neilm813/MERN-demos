import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingSpinner } from '../components/LoadingSpinner';

import { getOneLaunch } from '../services/spacexApiService';

export const OneLaunch = (props) => {
  const { id } = useParams();

  const [launch, setLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getOneLaunch(id)
      .then((data) => {
        setLaunch(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (launch === null) {
    return 'Not found...';
  }

  /* 
  We can only safely destructure here because we now know launch is not null.

  If we didn't check for null up here and did it in the JSX like:
  {launch && <div></div>}
  we wouldn't be able to destructure once already in the JSX.
  */
  const { date_local, details, links, name } = launch;
  const { article, flickr } = links;
  // Rename original while destructuring because it's not very descriptive.
  const { original: originalImageUrls } = flickr;

  /* Or nested destructuring: */
  // const {
  //   date_local,
  //   details,
  //   name,
  //   links: {
  //     flickr: { original: originalImageUrls },
  //   },
  // } = launch;

  return (
    <div className="flex-col align-items-center text-center rounded">
      <h2>Single Launch Details</h2>
      {launch === null && 'Not Found'}

      <h3>{name}</h3>
      <h4>Date</h4>
      <p>{date_local}</p>
      <h4>Details</h4>
      <p>{details}</p>

      {originalImageUrls.map((url) => {
        return (
          <img
            className="shadow-img rounded mb-md"
            src={url}
            alt={name}
            width="60%"
          />
        );
      })}

      {/* iframe renders a part of another website into our own. */}
      {article && (
        <iframe
          title="Launch Article"
          src={article}
          width="50%"
          height="800"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default OneLaunch;
