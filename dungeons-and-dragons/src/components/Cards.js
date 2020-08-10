import React from "react";

function Cards(props) {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <ul>
          <li>Name:{props.name} </li>
          <li>Size: {props.size}</li>
          <li>Alignment: {props.alignment}</li>
          <li>Armor Class: {props.armor_class}</li>
          <li>Strength: {props.strength}</li>
        </ul>

        <a href="#" className="card-link">
          Edit
        </a>
        <a href="#" className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Cards;
