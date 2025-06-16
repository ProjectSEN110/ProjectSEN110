import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="App">
      <h1> Shopping List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add an item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
