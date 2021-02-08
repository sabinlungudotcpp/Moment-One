import React, { Component } from "react";
import "./App.css";
import Axios from 'axios';

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:8020/api/v1/momentone/posts",
    headers: {
      "Content-Type": "application/json",
    }
  }).then(res => {
    console.log(res.data);
  });


  return (
    <div className = "App">
      <header className = "App-header">
        <h1> Moment One Home Page</h1>
      </header>
    </div>
  )
}

export default App;