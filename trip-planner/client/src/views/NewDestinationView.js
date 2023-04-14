import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function NewDestinationView(props) {
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');
  const [srcType, setSrcType] = useState('img');

  // Checkboxes
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);

  const handleNewDestinationSubmit = (event) => {
    event.preventDefault();

    const newDestination = {
      // Long-form - keyName: value
      location: location,
      // Shorthand can be used when the key name is the same as the var name containing the value
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    axios
      .post('http://localhost:8000/api/destinations', newDestination)
      .then((res) => {
        navigate('/destinations');
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>New Destination</h2>

      <form
        onSubmit={(event) => {
          handleNewDestinationSubmit(event);
        }}
      >
        <div>
          <label>Location: </label>
          <input
            type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Description: </label>
          <input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Media Url: </label>
          <input
            type="text"
            onChange={(event) => {
              setSrc(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Media Type: </label>
          <select
            type="text"
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
            value={srcType}
          >
            <option value="img">Image</option>
            <option value="Google Maps Embed">Google Maps Embed</option>
            <option value="Youtube Embed">Youtube Embed</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div>
          <label>Summer: </label>
          <input
            type="checkbox"
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Winter: </label>
          <input
            type="checkbox"
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Spring: </label>
          <input
            type="checkbox"
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Fall: </label>
          <input
            type="checkbox"
            onChange={(event) => {
              setFall(event.target.checked);
            }}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
