import React, { Component }  from 'react';
import './App.css';
import { NavbarHome, Body } from './routes';

function App() {
  return (
    <div className="body__style">
      <NavbarHome />
      <Body />
    </div>
  );
}

export default App;
