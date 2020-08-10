import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Cards from "./Cards";

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

class HomeScreen extends Component {
  constructor(props) {
    super(props);

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
    const monsters = this.state.data.splice(0, 9).map((data, i) => {
      return (
        <Cards
          key={i}
          Name={data.name}
          key={i}
          Size={data.size}
          key={i}
          Alignment={data.alignment}
          key={i}
          Armor
          Class={data.armor_class}
          key={i}
          Strength={data.strength}
        />
      );
    });
    // const monsters = this.state.data.splice(0, 9).map((data, i) => {
    //   return <Cards key={i} item={data} />;
    // });
    return <div className="container">{monsters}</div>;
  }
}

export default HomeScreen;
