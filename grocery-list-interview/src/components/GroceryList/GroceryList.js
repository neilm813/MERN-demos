import { useState } from 'react';
import { CreateGroceryItem } from '../CreateGroceryItem';

export const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [completedGroceryList, setCompletedGroceryList] = useState([]);

  const addGroceryItem = (item) => {
    // points could be NaN if HTML validations are bypassed
    setGroceryList([item, ...groceryList]);
  };

  return (
    <div>
      <h2>Grocery List</h2>
      <CreateGroceryItem addGroceryItem={addGroceryItem} />
      <hr />

      <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid red', padding: 5, marginRight: 5 }}>
          <h3>Incomplete</h3>

          {groceryList.map(({ category, name, description, points }, i) => (
            <div key={i}>
              <p>{category}</p>
              <p>{name}</p>
              <p>{description}</p>
              <p>{points}</p>
            </div>
          ))}
        </div>
        <div style={{ border: '1px solid green', padding: 5 }}>
          <h3>Completed</h3>
        </div>
      </div>
    </div>
  );
};
