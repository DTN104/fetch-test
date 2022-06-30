import React from "react";
import "./card.scss";

const Card = (props) => {
  const imgSrc = require(`../../images/${props.img}`);
  return (
    <div>
      <img src={imgSrc} />
      <div>{props.require} Coins</div>
      <div>{props.description}</div>
    </div>
  );
};

export default Card;
