import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Destination = (props) => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [dest, setDest] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/destinations/${_id}`)
      .then((res) => {
        setDest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/destinations/${_id}`)
      .then((res) => {
        return navigate('/destinations');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (dest === null) {
    return 'Loading...';
  }

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

      {dest.srcType === 'Google Maps Embed' && (
        <iframe
          title={dest.description}
          src={dest.src}
          width="100%"
          height="800"
          allowfullscreen=""
          loading="lazy"
          className="shadow rounded"
        ></iframe>
      )}

      {dest.srcType === 'Youtube Embed' && (
        <iframe
          title={dest.description}
          width="100%"
          height="800"
          src={dest.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="shadow rounded"
        ></iframe>
      )}

      {/* Render a <li> only if it's true. This could be done in a loop */}
      {dest.summer && <li className="list-group-item">Summer</li>}
      {dest.winter && <li className="list-group-item">Winter</li>}
      {dest.spring && <li className="list-group-item">Spring</li>}
      {dest.fall && <li className="list-group-item">Fall</li>}

      <div>
        <button
          onClick={(event) => {
            handleDelete();
          }}
          className="btn btn-sm btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Destination;
