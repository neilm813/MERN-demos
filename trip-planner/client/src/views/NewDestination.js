import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const NewDestination = (props) => {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');
  const [srcType, setSrcType] = useState('img');

  // Checkboxes
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleNewDestinationSubmit = (event) => {
    event.preventDefault();

    const newDestination = {
      // long-form syntax
      // key: value
      location: location,
      // shorthand syntax can be used when the key name matches the var name
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    axios
      .post('http://localhost:8080/api/destinations', newDestination)
      .then((res) => {
        console.log(res.data);
        navigate('/destinations');
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">New Destination</h3>

      <form
        onSubmit={(event) => {
          handleNewDestinationSubmit(event);
        }}
      >
        <div className="form-group">
          <label className="h6">Location</label>
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text"
            className="form-control"
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

        <h5>Travel Seasons</h5>
        <div className="form-check">
          <input
            onChange={(event) => {
              // USE .checked instead of .value for checkboxes
              setSummer(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Summer</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Winter</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Spring</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setFall(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Fall</label>
        </div>

        <button className="btn btn-sm btn-outline-success mt-2">Submit</button>
      </form>
    </div>
  );
};