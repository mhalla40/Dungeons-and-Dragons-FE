import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./components/HomeScreen";
import AddScreen from "./components/AddScreen";
import EditScreen from "./components/EditScreen";

import { Small } from "./components/Small";

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

    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    fetch(url, getOption)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="page">
          <NavBar />

          <Route path="/add">
            <AddScreen />
          </Route>
          <Route path="/edit/:id">
            <EditScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </div>
        <div className="info">
          <ul className="list">
            {this.state.data.splice(0, 9).map((data, i) => (
              <>
                <li key={i}>Name: {data.name}</li>
                <li key={i}>Size: {data.size}</li>
                <li key={i}>Alignment: {data.alignment}</li>
                <li key={i}>Armor Class: {data.armor_class}</li>
                <li key={i}>Strength: {data.strength}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   //getting the request from the api
  //   fetch(url, getOption)
  //     .then((res) => res.json())
  //     //converting response to readable data
  //     .then((convertedResponse) => {
  //       console.log(convertedResponse);
  //       this.setState({
  //         data: convertedResponse[0].name,
  //       });
  //     });
  // }
  // tiny = () => {
  //   fetch(url, getOption)
  //     .then((res) => res.json())
  //     //converting response to readable data
  //     .then((convertedResponse) => {
  //       console.log(convertedResponse[0]);
  //       this.setState({
  //         size: convertedResponse.map,
  //       });
  //     });
  // };
}

export default App;
