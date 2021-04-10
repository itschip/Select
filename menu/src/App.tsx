import React from 'react';
import './App.css';
import { useItems, useVisibility } from './context/MenuProvider';

function App() {
  const { visibility } = useVisibility();
  const { items } = useItems();

  return <div className="App">{visibility && <Menu items={items} />}</div>;
}

export default App;
