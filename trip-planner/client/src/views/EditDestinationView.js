import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditDestinationView(props) {
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/destinations/${id}`)
      .then((res) => {
        console.log(res.data);
        const destination = res.data;

        setLocation(destination.location);
        setDescription(destination.description);
        setSrc(destination.src);
        setSrcType(destination.srcType);
        setSummer(destination.summer);
        setWinter(destination.winter);
        setSpring(destination.spring);
        setFall(destination.fall);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditDestinationSubmit = (event) => {
    event.preventDefault();

    const editedDestination = {
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
      .put(`http://localhost:8000/api/destinations/${id}`, editedDestination)
      .then((res) => {
        navigate(`/destinations/${id}`);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Edit Trip</h2>

      <form
        onSubmit={(event) => {
          handleEditDestinationSubmit(event);
        }}
      >
        <div>
          <label>Location: </label>
          <input
            value={location}
            type="text"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Description: </label>
          <input
            value={description}
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Media Url: </label>
          <input
            value={src}
            type="text"
            onChange={(event) => {
              setSrc(event.target.value);
            }}
          />
        </div>

        <div>
          <label>Media Type: </label>
          <select
            value={srcType}
            type="text"
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
          >
            <option value="img">Image</option>
            <option value="Google Maps Embed">Google Maps Embed</option>
            <option value="Youtube Embed">Youtube Embed</option>
          </select>
        </div>

        {/* Checkboxes, USE checked not value!!! */}
        <div>
          <label>Summer: </label>
          <input
            checked={summer}
            type="checkbox"
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Winter: </label>
          <input
            checked={winter}
            type="checkbox"
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Spring: </label>
          <input
            checked={spring}
            type="checkbox"
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
          />
        </div>

        <div>
          <label>Fall: </label>
          <input
            checked={fall}
            type="checkbox"
            onChange={(event) => {
              setFall(event.target.checked);
            }}
          />
        </div>

        <button>Edit</button>
      </form>
    </div>
  );
}
