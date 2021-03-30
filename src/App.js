import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return ( 
      <div className="app">
      {/* header */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
    
  );
}

export default App;
