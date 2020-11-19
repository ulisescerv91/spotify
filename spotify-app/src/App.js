import React,{useEffect} from 'react';

import Login from './Login'

import './App.css';
import { getTokenFromUrl } from './spotify';

function App() {

  //Run code based on a given condition
  useEffect( () => {
    const token = getTokenFromUrl();
    console.log('I have Token ->', token)
  },[]);

  return (
    <div className="App">
      <Login/>
    </div>    
  );
}

export default App;
