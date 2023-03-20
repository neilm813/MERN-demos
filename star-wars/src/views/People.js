import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

export const People = () => {
  const { id } = useParams();

  const [person, setPerson] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        console.log(res.data);
        setPerson(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (person === null) {
    return 'Loading';
  }

  return (
    <div>
      <p>height: {person.height}</p>
    </div>
  );
};
