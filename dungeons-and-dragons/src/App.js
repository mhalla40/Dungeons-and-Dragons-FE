import React, { Component } from "react";
import "./App.css";

import Button from "react-bootstrap/Button";

let url = "https://dungeons-and-dragons40.herokuapp.com/monster";

const getOption = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const postOption = {
  method: "POST",
  headers: {
    Accept: "application/json",
  },
};

const deleteOption = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
  },
};

const putOption = {
  method: "PUT",
  headers: {
    Accept: "application/json",
  },
};

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    //getting the request from the api
    fetch(url, getOption)
      .then((res) => res.json())
      //converting response to readable data
      .then((convertedResponse) => {
        console.log(convertedResponse);
      });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Hi</p>
        <Button variant="info">Info</Button>{" "}
      </div>
    );
  }
}

export default App;
