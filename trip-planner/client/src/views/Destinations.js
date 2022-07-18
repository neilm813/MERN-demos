import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:8000/api/destinations/${_id}`)
      .then((res) => {
        const filteredDestinations = destinations.filter((dest) => {
          // This is only true when the id matches the one to delete
          return dest._id !== _id;
        });
        setDestinations(filteredDestinations);
        console.log('deleted:', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-75 mx-auto text-center">
      <h2>Travel Destinations</h2>

      {destinations.map((dest) => {
        return (
          <div key={dest._id} className="shadow mb-4 rounded border p-4">
            <Link to={`/destinations/${dest._id}`}>
              <h4>{dest.location}</h4>
            </Link>
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

            <div>
              <Link to={`/destinations/${dest._id}/edit`}>Edit</Link>
              <button
                onClick={(event) => {
                  handleDelete(dest._id);
                }}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Destination;
