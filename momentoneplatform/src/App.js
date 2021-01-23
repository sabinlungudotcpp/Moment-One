import './App.css';
import React from 'react';
import Axios from 'axios';

function App() {
  Axios({
    method: 'GET',
    url: "http://localhost:3000/",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return (
    <div className="App">
       <h1>Moment</h1>
      </div>
  )}


export default App;