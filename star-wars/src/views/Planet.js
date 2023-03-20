import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export const Planet = () => {
  const { id } = useParams();

  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        console.log(res.data);
        setPlanet(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (planet === null) {
    return 'Loading';
  }

  return (
    <div>
      <p>population: {planet.population}</p>
    </div>
  );
};
