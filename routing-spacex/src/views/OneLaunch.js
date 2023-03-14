import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { LoadingSpinner } from '../components/LoadingSpinner';

export const OneLaunch = (props) => {
  const { id } = useParams();

  const [launch, setLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // empty array as arg2 makes useEffect only run on first render (mount).
  useEffect(() => {
    setIsLoading(true);

    // To test loading put entire axios call in a setTimeout
    axios
      .get(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => {
        console.log(res);
        setLaunch(res.data);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      })
      .finally(() => {
        // Whether the .then (success) or the .catch (error) happens, we are done loading.
        setIsLoading(false);
      });
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (launch === null) {
    return <LoadingSpinner />;
  }

  /* 
  We can only safely destructure here because we now know launch is not null.

  If we didn't check for null up here and did it in the JSX like:
  {launch && <div></div>}
  we wouldn't be able to destructure once already in the JSX.
  */
  const { date_local, details, name, links } = launch;
  const { flickr } = links;
  const { original: originalImgUrls } = flickr;

  return (
    <div className="flex-col align-items-center text-center">
      <h2>{name}</h2>
      <h4>Date</h4>
      <p>{date_local}</p>
      <h4>Details</h4>
      <p>{details}</p>

      {originalImgUrls.map((url) => {
        return <img className="shadow-img rounded mb-md" src={url} alt="Launch" width="60%" />;
      })}
    </div>
  );
};

export default OneLaunch;
