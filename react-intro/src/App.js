import './App.css';

// Default import, can name it whatever you want.
// import MyCounter from './components/Counter';

// Named import, must be named how it is in the file.
import { Counter } from './components/Counter';

function App() {
  const countersData = [
    {
      title: 'Bugs in the code',
      color: 'red',
    },
    {
      title: 'Wheels on the bus',
      step: 2,
      start: 6,
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {/* <Counter title="Bugs in the code" color="red" />
      <Counter title="Wheels on the bus" step={2} start={6} /> */}

      {countersData.map((counterData, i) => {
        return <Counter key={i} counter={counterData} />;
      })}
    </div>
  );
}

export default App;
