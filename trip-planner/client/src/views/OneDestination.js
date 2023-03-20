import { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';

export const OneDestination = (props) => {
  // url route param matching `:id`.
  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/destinations/${id}`)
      .then((res) => {
        setDestination(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleDeleteClick = () => {
    axios
      .delete(`http://localhost:8080/api/destinations/${id}`)
      .then((res) => {
        navigate('/destinations');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (destination === null) {
    return 'Loading';
  }

  // DESTRUCTURING WILL BREAK when destination is null while waiting for the .get
  // unless you verify it's not null before.
  const { _id, location, description, summer, winter, spring, fall, src, srcType } = destination;

  return (
    <div className="w-75 mx-auto text-center">
      <h2>Your Destination</h2>
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
      {srcType === 'img' && <img className="shadow rounded" width="100%" src={src} alt={location} />}

      {/* iframe won't be on the exam */}
      {/* The iframe code is found by clicking share buttons and then embed */}
      {srcType === 'Google Maps Embed' && (
        <iframe
          title={description}
          src={src}
          width="100%"
          height="800"
          allowFullScreen=""
          loading="lazy"
          className="shadow rounded"
        ></iframe>
      )}
      {srcType === 'Youtube Embed' && (
        <iframe
          title={description}
          width="100%"
          height="800"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shadow rounded"
        ></iframe>
      )}

      <button
        onClick={(event) => {
          handleDeleteClick();
        }}
        className="btn btn-sm btn-outline-danger mx-1"
      >
        Delete
      </button>
    </div>
  );
};
