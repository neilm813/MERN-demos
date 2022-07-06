import logo from './logo.svg';
import './App.css';

import { Counter } from './components/Counter';

function App() {
  return (
    <div
      id="app-container"
      className="bold center blah"
      students={[{ name: 'LEe' }, { name: 'Veronica' }]}
    >
      <h1>Hello world</h1>
      <button
        onClick={() => {
          console.log('clicked!');
        }}
      >
        Click Me
      </button>

      <div>
        <Counter label="Bugs In The Code" start={5} amount={2} />
        <Counter label="Cute doggos" />
      </div>
    </div>
  );
}

export default App;
