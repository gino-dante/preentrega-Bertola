// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda!" />
    </div>
  );
};

export default App;
