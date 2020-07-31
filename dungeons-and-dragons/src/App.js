import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

export default App;
