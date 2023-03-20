import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

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

  const handleDeleteClick = (idToDelete) => {
    axios
      .delete(`http://localhost:8080/api/destinations/${idToDelete}`)
      .then((res) => {
        const filteredDestinations = destinations.filter((destination) => {
          const isDestinationToDelete = idToDelete === destination._id;

          if (isDestinationToDelete) {
            // returning false tells filter to remove it.
            return false;
          }

          return true;
        });

        setDestinations(filteredDestinations);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h2>Travel Destinations</h2>

      {destinations.map((destination) => {
        const { _id, location, description, summer, winter, spring, fall } = destination;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <h4>
              <Link to={`/destinations/${_id}`}>{location}</Link>
            </h4>
            <p>{description}</p>
            <h5>Travel Seasons:</h5>
            {/* display only the `true` seasons */}
            {summer && <p>Summer</p>}
            {winter && <p>Winter</p>}
            {spring && <p>Spring</p>}
            {fall && <p>Fall</p>}

            <div>
              <button
                onClick={(event) => {
                  handleDeleteClick(_id);
                }}
                className="btn btn-sm btn-outline-danger mx-1"
              >
                Delete
              </button>

              <Link to={`/destinations/${_id}/edit`} className="btn btn-sm btn-outline-warning mx-1">
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllDestinations;
