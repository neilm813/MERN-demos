import { useEffect, useState } from 'react';

import axios from 'axios';

export const AllDestinations = (props) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/destinations')
      .then((res) => {
        setDestinations(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-50 mx-auto text-center">
      <h2>Travel Destinations</h2>

      {destinations.map((destination) => {
        const { _id, location, description, summer, winter, spring, fall } = destination;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <h4>{location}</h4>
            <p>{description}</p>
            <h5>Travel Seasons:</h5>
            {/* display only the `true` seasons */}
            {summer && <p>Summer</p>}
            {winter && <p>Winter</p>}
            {spring && <p>Spring</p>}
            {fall && <p>Fall</p>}
          </div>
        );
      })}
    </div>
  );
};

export default AllDestinations;
