import React from 'react';
import './App.css';
import { Navbar, Landing, AboutMe, Technologies, Portfolio, Contact } from './sections/index';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Landing />
      <AboutMe />
      <Technologies />
      <Portfolio />
      <Contact />
   </div>
  );
}

export default App;
