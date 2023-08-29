import React from "react";
import Card from "./Card";
import destinations from "../data";

function Travel(props) {
  const cards = destinations.map((dest) => <Card key={dest.title} {...dest} />);

  return (
    <div className="travel-container">
      <h1 className="travel-title">{props.title}</h1>
      {cards}
    </div>
  );
}

export default Travel;
