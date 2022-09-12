import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDestination } from '../services/internalApiService';

export const NewDestination = (props) => {
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');
  const [srcType, setSrcType] = useState('img');

  // checkboxes
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);

  const [errors, setErrors] = useState(null);

  const handleNewDestinationSubmit = (event) => {
    event.preventDefault();

    const newDestination = {
      // long-form syntax - key: value
      location: location,

      // shorthand syntax can be used when the key name matches var name
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    createDestination(newDestination)
      .then((data) => {
        /* 
        Our service returns only the data. If using axios directly, you get
        `res` and need to do `res.data`.
        */

        console.log('new destination data:', data);
        navigate('/destinations');
      })
      .catch((error) => {
        console.log(error);
        // `?.` allows you to safely access keys that may not exist, instead of
        // crashing the app if a key doesn't exist, it will return undefined.
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <form onSubmit={(e) => handleNewDestinationSubmit(e)}>
        <div className="form-group">
          <label className="h6">Location</label>
          {errors?.location && (
            <span style={{ color: 'red' }}> {errors?.location?.message}</span>
          )}
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
          {errors?.description && (
            <span style={{ color: 'red' }}>
              {' '}
              {errors?.description?.message}
            </span>
          )}
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
          {errors?.src && (
            <span style={{ color: 'red' }}> {errors?.src?.message}</span>
          )}
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
          {errors?.srcType && (
            <span style={{ color: 'red' }}> {errors?.srcType?.message}</span>
          )}
          <select
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
            type="text"
            className="form-control"
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
          />
          <label className="h6">Fall</label>
        </div>

        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default NewDestination;
