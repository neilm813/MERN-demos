import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditDestination = (props) => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [src, setSrc] = useState('');

  // <select>
  const [srcType, setSrcType] = useState('img');

  // Checkboxes
  const [summer, setSummer] = useState(false);
  const [winter, setWinter] = useState(false);
  const [spring, setSpring] = useState(false);
  const [fall, setFall] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/destinations/${_id}`)
      .then((res) => {
        const data = res.data;
        setLocation(data.location);
        setDescription(data.description);
        setSrc(data.src);
        setSrcType(data.srcType);
        setSummer(data.summer);
        setWinter(data.winter);
        setSpring(data.spring);
        setFall(data.fall);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [_id]);

  const handleEditDestinationSubmit = (event) => {
    event.preventDefault();

    const editedDestination = {
      // long-form - key: value format
      // shorthand can be used when the value is in a var named the same.
      location: location,
      description,
      src,
      srcType,
      summer,
      winter,
      spring,
      fall,
    };

    axios
      .put(`http://localhost:8000/api/destinations/${_id}`, editedDestination)
      .then((res) => {
        console.log(res.data);
        navigate(`/destinations/${_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">Edit Destination</h3>

      <form
        onSubmit={(event) => {
          handleEditDestinationSubmit(event);
        }}
      >
        <div className="form-group mb-2">
          <label className="h6">Location</label>
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            value={location}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group mb-2">
          <label className="h6">Description</label>
          <input
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group mb-2">
          <label className="h6">Media Url</label>
          <input
            onChange={(event) => {
              setSrc(event.target.value);
            }}
            value={src}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group mb-2">
          <label className="h6">Media Type</label>
          <select
            onChange={(event) => {
              setSrcType(event.target.value);
            }}
            value={srcType}
            type="text"
            className="form-control"
          >
            <option value="img">Image</option>
            <option value="Google Maps Embed">Google Maps Embed</option>
            <option value="Youtube Embed">Youtube Embed</option>
          </select>
        </div>

        <div className="form-group mb-2">
          <input
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
            checked={summer}
            type="checkbox"
            className="form-check-input"
          />{' '}
          <label className="h6">Summer</label>
        </div>

        <div className="form-group mb-2">
          <input
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
            checked={winter}
            type="checkbox"
            className="form-check-input pr-2"
          />{' '}
          <label className="h6">Winter</label>
        </div>

        <div className="form-group mb-2">
          <input
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
            checked={spring}
            type="checkbox"
            className="form-check-input pr-2"
          />{' '}
          <label className="h6">Spring</label>
        </div>

        <div className="form-group mb-2">
          <input
            onChange={(event) => {
              setFall(event.target.checked);
            }}
            checked={fall}
            type="checkbox"
            className="form-check-input pr-2"
          />{' '}
          <label className="h6">Fall</label>
        </div>
        <button className="btn btn-sm btn-outline-primary">Submit</button>
      </form>
    </div>
  );
};

export default EditDestination;
