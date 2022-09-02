import logo from './logo.svg';
import './App.css';

/* 
instead of importing all of react:
import { only, what, we, need } from "react"

useState is a hook (just a function)
it helps our functional component 'hook' into more react functionality

Comparatively, class components inherit some functionality as methods.
*/

import { Flashcards } from './components/Flashcards';

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
        <hr />
      </header>

      <main>
        <Flashcards
          queryParams={{
            amount: 10,
            category: 18,
            difficulty: 'medium',
            type: 'boolean',
          }}
        />

        <Flashcards
          queryParams={{
            amount: 5,
            category: 11,
            difficulty: 'easy',
            type: 'boolean',
          }}
        />
      </main>
    </div>
  );
}

export default App;
