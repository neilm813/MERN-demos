import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const handleDeleteDestination = (idToDelete) => {
    axios
      .delete(`http://localhost:8000/api/destinations/${idToDelete}`)
      .then((res) => {
        const filteredDestinations = destinations.filter((destination) => {
          const shouldDelete = destination._id === idToDelete;

          if (shouldDelete) {
            // return false to tell .filter to remove the item.
            return false;
          }
          return true;
        });

        // Cause a re-render to remove it from the page.
        setDestinations(filteredDestinations);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Planned Destinations</h2>
      {destinations.map((destination) => {
        return (
          <div key={destination._id} style={{ width: '70%', margin: '0 auto' }}>
            <Link to={`/destinations/${destination._id}`}>
              <h3>{destination.location}</h3>
            </Link>
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

            {destination.srcType === 'Google Maps Embed' && (
              <iframe
                title={destination.description}
                src={destination.src}
                width="100%"
                height="800"
                allowFullScreen=""
                loading="lazy"
                style={{
                  borderRadius: '5px',
                  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
                }}
              ></iframe>
            )}

            {destination.srcType === 'Youtube Embed' && (
              <iframe
                title={destination.description}
                width="100%"
                height="800"
                src={destination.src}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="shadow rounded"
              ></iframe>
            )}

            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to={`/destinations/${destination._id}/edit`}>Edit</Link>
              <button
                onClick={(event) => {
                  handleDeleteDestination(destination._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
