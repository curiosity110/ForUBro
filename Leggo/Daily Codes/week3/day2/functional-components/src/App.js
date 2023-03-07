import './App.css';
import React, { Component, useState } from 'react';
import Login from './components/login';
import CompDidMount from './components/compDidmount';
import Headline from './components/headline';

const App = () => {
  
  // setting up a rendering variable that we can change with our onclick
  const [rendering, setRendering] = useState(true)
    return (
      <div onClick={() => setRendering(!rendering)} className="App">
        <Headline text='functional - Headline'/>
        <Login />
        {/* rendering the <CompDidMount if rendering is true */}
        {rendering ? <CompDidMount /> : ''}
      </div>
    );
  
}

export default App;
