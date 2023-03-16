import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

export const OneCrew = () => {
  const { id } = useParams();

  const [crew, setCrew] = useState(null);
  const [error, setError] = useState('');

  // empty array as arg2 makes useEffect only run on first render (mount).
  useEffect(() => {
    // To test loading put entire axios call in a setTimeout
    axios
      .get(`https://api.spacexdata.com/v4/crew/${id}`)
      .then((res) => {
        console.log(res);
        setCrew(res.data);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, [id]);

  if (error) {
    return <h3 style={{ color: 'red' }}>{error}</h3>;
  }

  return (
    <div className="flex-col align-items-center text-center">
      <h2>{crew.name}</h2>
      <img className="shadow-img rounded mb-md" src={crew.image} alt="crew" width="60%" />;
    </div>
  );
};
