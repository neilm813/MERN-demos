import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DestinationsView(props) {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/destinations')
      .then((res) => {
        console.log(res.data);
        setDestinations(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Planned Destinations</h2>
      {destinations.map((destination) => {
        return (
          <div key={destination._id} style={{ width: '70%', margin: '0 auto' }}>
            <h3>{destination.location}</h3>
            <p>{destination.description}</p>

            {destination.srcType === 'img' && (
              <img
                style={{
                  borderRadius: '5px',
                  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
                }}
                src={destination.src}
                width="100%"
                alt="Travel Destination"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
