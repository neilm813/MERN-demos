import './App.css';
import { Flashcards } from './components/Flashcards';

const flashcards1 = [
  {
    flipped: false,
    category: 'React',
    front: 'What is the difference between props and state?',
    back: 'Props are the initial values passed into the component, they are not changed from within the component but they can change if the parent is re-rendered and passes in new data. State is any data in the component that the component changes from within itself.',
  },
  {
    flipped: false,
    category: 'Web Fundamentals',
    front: 'What is the HTTP request response cycle?',
    back: 'The client (typically a user on an internet connected device) requests a resource, usually a web page or some data by triggering an event through (often with a click) or by entering a URL into the address bar. The request is received and processed by a server (another computer), then the server responds with the requested resource if successful. If raw data was requested, the response may be JSON, if a page was requested the response would be HTML, CSS, and JS code used to display the page.',
  },
  {
    flipped: false,
    category: 'OOP',
    front: 'What does pass by reference mean?',
    back: 'Pass by reference means that when an object / list is passed into a function, it is passed by reference so that if it is mutated (changed) inside the function, those changes are changing are not just local to the parameter, the object outside the function is changed because the parameter is referring to the same object, not a separate copy. Primitives are passed by value, so if a var with the number 5 is passed into a function and 1 is added to it inside the function, it will not change the value of the var outside the function.',
  },
  {
    flipped: false,
    category: 'Computer Science',
    front: 'What is scope?',
    back: 'Scope refers to a location in code where variables exist and are accessible, but outside that region they do not exist and cannot be accessed. Like zooming in through a scope, what is outside of the scope is no longer seen. For example: variables declared inside a function only exist inside the function and cannot be accessed outside the function, but the function has access to variables that are created outside of the function.',
  },
];

const flashcards2 = [
  {
    flipped: false,
    category: 'JavaScript',
    front:
      'What is the functional difference between {...foo, ...bar} and {...bar, ...foo}? Assume foo and bar are objects.',
    back: 'The key value pairs of both foo and bar are being copied into a new object via the spread operator. If any of the objects that are spread into the new object have the same key names, the value will be the last one added.',
  },
  {
    flipped: false,
    category: 'HTTP',
    front: 'What are the different HTTP methods / verbs and what are they used for?',
    back: 'GET is for getting data, POST is for submitting new data, PUT and PATCH are for updating existing data, DELETE is for deleting data.',
  },
  {
    flipped: false,
    category: 'HTTP',
    front: 'What is the difference between PUT and PATCH?',
    back: "PUT overwrites the entity entirely if it exists to update it, or creates a new one if it doesn't exist which means that it should include all the data even if only some of it is being updated. PATCH is for updating only part of the entity, so only the part that is changing needs to be provided.",
  },
  {
    flipped: false,
    category: 'JavaScript',
    front: 'How do you comfort a bug?',
    back: 'You console it.',
  },
  {
    flipped: false,
    category: 'Computer Science',
    front: 'What is Big-O Notation and what is it used for?',
    back: 'Big-O notation is the language we use for talking about how long an algorithm takes to run (time complexity) or how much memory is used by an algorithm (space complexity). Big-O Notation focuses on how the growth pattern of the time/space in relation to the size of the input rather than focusing on an exact run time. Think of growth lines / curve patterns on a graph.',
  },
  {
    flipped: false,
    category: 'OOP',
    front: 'What is inheritance?',
    back: "Inheritance is the procedure in which one class inherits the attributes and methods of another 'parent' class.",
  },
  {
    flipped: false,
    category: 'Functional Programming',
    front: 'What is a callback function and what is it useful for?',
    back: 'A callback function is a function passed into another function as an argument. Callbacks are useful for handling asynchronous programming and are also used as a way to pass in a set of instructions into another function so the callback can be managed and called at the right time with the right arguments.',
  },
  {
    flipped: false,
    category: 'Computer Science',
    front: 'What is separation of concerns?',
    back: 'In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern.',
  },
];

function App() {
  return (
    <div className="container">
      <header style={{ textAlign: 'center' }}>
        <h1>Programming Flash Cards</h1>
      </header>
      <hr />

      <main>
        <Flashcards title="Flashcards 1" />
        <Flashcards title="Flashcards 2" />

        {/* {[flashcards1, flashcards2].map((flashcards) => (
          <Flashcards cards={flashcards} />
        ))} */}
      </main>
    </div>
  );
}

export default App;
