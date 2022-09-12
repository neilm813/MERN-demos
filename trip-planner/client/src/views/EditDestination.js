import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getDestinationById,
  updateDestinationById,
} from '../services/internalApiService';

export const EditDestination = (props) => {
  // url route param matching `:id`.
  const { id } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');
  const [srcType, setSrcType] = useState('');

  // checkboxes
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);

  const [errors, setErrors] = useState(null);

  useEffect(() => {
    getDestinationById(id)
      .then((data) => {
        setLocation(data.location);
        setDescription(data.description);
        setSrc(data.src);
        setSrcType(data.srcType);
        setSummer(data.summer);
        setWinter(data.winter);
        setSpring(data.spring);
        setFall(data.fall);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditDestinationSubmit = (event) => {
    event.preventDefault();

    const editedDestination = {
      // long-form - key: value
      location: location,
      // shorthand can be used when the key name matches the var name.
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    updateDestinationById(id, editedDestination)
      .then((updatedDestination) => {
        console.log('updatedDestination:', updatedDestination);
        navigate(`/destinations/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <form onSubmit={(e) => handleEditDestinationSubmit(e)}>
        <div className="form-group">
          <label className="h6">Location</label>
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text"
            className="form-control"
            value={location}
          />
        </div>

        <div className="form-group">
          <label className="h6">Description</label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
            value={description}
          />
        </div>

        <div className="form-group">
          <label className="h6">Media URL</label>
          <input
            onChange={(event) => {
              setSrc(event.target.value);
            }}
            type="text"
            className="form-control"
            value={src}
          />
        </div>

        <div className="form-group">
          <label className="h6">Media Type</label>
          <select
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
            type="text"
            className="form-control"
            value={srcType}
          >
            <option value="img">Image</option>
            <option value="Google Maps Embed">Google Maps Embed</option>
            <option value="Youtube Embed">Youtube Embed</option>
          </select>
        </div>

        <div className="form-group">
          <input
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
            checked={summer}
          />
          <label className="h6">Summer</label>
        </div>

        <div className="form-group">
          <input
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
            checked={winter}
          />
          <label className="h6">Winter</label>
        </div>

        <div className="form-group">
          <input
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
            checked={spring}
          />
          <label className="h6">Spring</label>
        </div>

        <div className="form-group">
          <input
            onChange={(event) => {
              setFall(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
            checked={fall}
          />
          <label className="h6">Fall</label>
        </div>

        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default EditDestination;
