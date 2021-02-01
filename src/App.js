import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

export default class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    fetch('http://localhost:8080/fe').then(response => response.json());
  }

  render() {
    return <div>
      <h1>Moment One Platform</h1>
    </div>
  }
}