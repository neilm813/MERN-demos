// import { useState } from 'react'
import './App.css';

import { Button } from '@/components';

function App() {
  return (
    <div className="w-5/6 mx-auto">
      <Button>Default button</Button>
      <Button data-user-id={2} onClick={() => console.log('test')} abc="zxy" variant="destructive" size="sm">
        Destructive
      </Button>
      <Button variant="outline" size="lg">
        Outline
      </Button>
      <Button variant="link">Link</Button>
      <Button asChild variant="fun" size="xxl">
        fun
      </Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
