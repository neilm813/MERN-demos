import './App.css';
import { Flashcards } from './components/Flashcards';

function App() {
  const flashcardsData = [
    {
      title: 'Flashcards 1',
      query: {
        amount: 10,
        category: 18,
        difficulty: 'medium',
        type: 'boolean',
      },
    },

    {
      title: 'Flashcards 2',
      query: {
        amount: 3,
        category: 17,
        difficulty: 'medium',
        type: 'boolean',
      },
    },
  ];

  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
      </header>
      <hr />

      <main>
        {flashcardsData.map((flashcardData) => {
          return <Flashcards title={flashcardsData.title} query={flashcardData.query} />;
        })}
      </main>
    </div>
  );
}

export default App;
