import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const [selectedResource, setSelectedResource] = useState('launches');
  const [selectedId, setSelectedId] = useState('');
  const [selectedIdError, setSelectedIdError] = useState('Id must be at least 5 characters');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    navigate(`/${selectedResource}/${selectedId}`);
  };

  const formHasErrors = selectedIdError;

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);

    if (event.target.value.length < 5) {
      setSelectedIdError('Id must be at least 5 characters');
    } else {
      setSelectedIdError('');
    }
  };

  return (
    <div>
      <h2>Welcome Home</h2>

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Resource: </label>
          <select
            onChange={(event) => {
              setSelectedResource(event.target.value);
            }}
            value={selectedResource}
          >
            <option value="crew">Crew</option>
            <option value="launches">Launch</option>
          </select>
        </div>

        <div>
          {selectedIdError !== '' && <p style={{ color: 'red' }}>{selectedIdError}</p>}
          <label>Id: </label>
          <input
            onChange={(event) => {
              handleIdChange(event);
            }}
            type="text"
            value={selectedId}
          />
        </div>
        <button disabled={formHasErrors}>Submit</button>
      </form>
    </div>
  );
};
