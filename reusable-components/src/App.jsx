import { useState } from 'react';
import './App.css';

import { Button } from '@/components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  );
}

export default App;
