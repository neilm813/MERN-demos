import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function OneDestinationView(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/destinations/${id}`)
      .then((res) => {
        console.log(res.data);
        setDestination(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDeleteDestination = (idToDelete) => {
    axios
      .delete(`http://localhost:8000/api/destinations/${idToDelete}`)
      .then((res) => {
        // We don't have to update state here b/c there the data they are viewing is deleted so there's nothing
        // to show, just navigate them to a different view.
        navigate('/destinations');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Planned Destination</h2>

      {destination !== null && (
        <div style={{ width: '85%', margin: '0 auto' }}>
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

          <div>
            <h4>Travel Seasons:</h4>
            {destination.summer && <p>Summer</p>}
            {destination.winter && <p>Winter</p>}
            {destination.spring && <p>Spring</p>}
            {destination.fall && <p>Fall</p>}
          </div>

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
      )}
    </div>
  );
}
