import { useEffect, useState } from 'react';
import axios from 'axios';

const Destination = (props) => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/destinations')
      .then((res) => {
        setDestinations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-100 mx-auto text-center">
      <h2>Travel Destinations</h2>

      {destinations.map((dest) => {
        return (
          <div key={dest._id} className="shadow mb-4 rounded border p-4">
            <h4>{dest.location}</h4>
            <p>{dest.description}</p>
            <h5>Travel Seasons:</h5>
            <ul className="list-group"></ul>

            {dest.srcType === 'img' && (
              <img
                className="shadow rounded"
                width="100%"
                src={dest.src}
                alt={dest.location}
              />
            )}

            {/* Render a <li> only if it's true. This could be done in a loop */}
            {dest.summer && <li className="list-group-item">Summer</li>}
            {dest.winter && <li className="list-group-item">Winter</li>}
            {dest.spring && <li className="list-group-item">Spring</li>}
            {dest.fall && <li className="list-group-item">Fall</li>}
          </div>
        );
      })}
    </div>
  );
};

export default Destination;
