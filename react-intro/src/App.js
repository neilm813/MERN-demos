import './App.css';

import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello World</h1>
        <Counter subject="Bugs" />
        <Counter subject="Clouds" count={5} />
      </div>
    </div>
  );
}

export default App;
