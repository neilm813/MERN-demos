import logo from './logo.svg';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { People } from './views/People';
import { Planet } from './views/Planet';

import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState('');
  const [selectedEntity, setSelectedEntity] = useState('');
  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate(`/${selectedEntity}/${selectedId}`);
        }}
      >
        <input type="text" onChange={(event) => setSelectedEntity(event.target.value)} />
        <input type="text" onChange={(event) => setSelectedId(event.target.value)} />
        <button>Submit</button>
      </form>

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
