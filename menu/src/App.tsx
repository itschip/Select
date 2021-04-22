import React from 'react';
import './App.scss';
import { useItems, useVisibility } from './context/MenuProvider';
import Menu from './Menu/Menu';

function App() {
  const { visibility } = useVisibility();
  const items = useItems();

  return (
    <div className="App">
      <Menu items={items} />
    </div>
  );
}

export default App;
