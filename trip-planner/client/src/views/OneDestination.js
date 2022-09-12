import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  deleteDestinationById,
  getDestinationById,
} from '../services/internalApiService';

export const OneDestination = (props) => {
  const [destination, setDestination] = useState(null);
  // Get the `:id` url parameter data.
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getDestinationById(id)
      .then((data) => {
        console.log(data);
        setDestination(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (destination === null) {
    // display nothing until we have data.
    return null;
  }

  const handleDeleteClick = () => {
    deleteDestinationById(id)
      .then((deletedDestination) => {
        navigate('/destinations');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // We can only safely use the data to render and destructure now since
  // we checked it's not null.
  const { location, description, summer, winter, spring, fall, srcType, src } =
    destination;

  return (
    <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
      <h4>{location}</h4>
      <p>{description}</p>
      <h5>Travel Seasons:</h5>
      {/* Display only the `true` seasons. */}
      <ul className="list-group mb-3">
        {summer && <li className="list-group-item">Summer</li>}
        {winter && <li className="list-group-item">Winter</li>}
        {spring && <li className="list-group-item">Spring</li>}
        {fall && <li className="list-group-item">Fall</li>}
      </ul>

      {srcType === 'img' && (
        <img src={src} alt={location} className="shadow rounded" width="100%" />
      )}

      {srcType === 'Google Maps Embed' && (
        <iframe
          title={description}
          src={src}
          width="100%"
          height="800"
          allowfullscreen=""
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
          allowfullscreen
          className="shadow rounded"
        ></iframe>
      )}

      <div className="mt-2">
        <button
          onClick={(e) => {
            handleDeleteClick();
          }}
          className="btn btn-sm btn-outline-danger mx-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneDestination;
