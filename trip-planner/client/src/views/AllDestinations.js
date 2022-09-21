import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  deleteDestinationById,
  getAllDestinations,
} from '../services/internalApiService';

// Named export: import { AllDestinations, Name2 } from './components/AllDestinations';
export const AllDestinations = (props) => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  /* 
  Empty arr as second arguments means it will only run on mount, not on other
  state changes so we don't keep re-fetching data.
  */
  useEffect(() => {
    getAllDestinations()
      .then((data) => {
        console.log(data);
        setDestinations(data);
        setFilteredDestinations(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDeleteClick = (idToDelete) => {
    deleteDestinationById(idToDelete)
      .then((deletedDestination) => {
        const filteredDestinations = destinations.filter((destination) => {
          return destination._id !== idToDelete;
        });

        console.log('deletedDestination:', deletedDestination);
        setDestinations(filteredDestinations);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeSearch = (event) => {
    const searchLocation = event.target.value.toLowerCase();

    if (searchLocation === '') {
      return setFilteredDestinations(destinations);
    }

    const updatedFilteredDestinations = destinations.filter((destination) => {
      return destination.location.toLowerCase().includes(searchLocation);
    });

    setFilteredDestinations(updatedFilteredDestinations);
  };

  return (
    <div className="w-50 mx-auto text-center">
      <h2>Travel Destinations!</h2>

      <div>
        <label>Search location:</label>
        <input onChange={handleChangeSearch} type="text" />
      </div>

      {filteredDestinations.map((destination) => {
        const { _id, location, description, summer, winter, spring, fall } =
          destination;

        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <Link to={`/destinations/${_id}`}>
              <h4>{location}</h4>
            </Link>
            <p>{description}</p>
            <h5>Travel Seasons:</h5>
            {/* Display only the `true` seasons. */}
            <ul className="list-group">
              {summer && <li className="list-group-item">Summer</li>}
              {winter && <li className="list-group-item">Winter</li>}
              {spring && <li className="list-group-item">Spring</li>}
              {fall && <li className="list-group-item">Fall</li>}
            </ul>

            <div className="mt-2">
              <button
                onClick={(e) => {
                  handleDeleteClick(_id);
                }}
                className="btn btn-sm btn-outline-danger mx-1"
              >
                Delete
              </button>

              <Link
                to={`/destinations/${_id}/edit`}
                className="btn btn-sm btn-outline-warning mx-1"
              >
                Edit
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Only 1 default per file: import AllDestinations from './components/AllDestinations';
// When importing default, you can choose any name.
export default AllDestinations;
