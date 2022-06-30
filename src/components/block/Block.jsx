import React, { useState, useEffect } from "react";
import "./block.scss";
import Card from "../card/Card";
import axios from "axios";

const Block = (props) => {
  const cards = props.cards;
  return (
    <div>
      <div className="block-title">{props.blockName}</div>
      {cards.map((card, index) => (
        <Card
          img={card.img}
          require={card.require}
          description={card.description}
          limited={card.limited}
          key={index}
        />
      ))}
    </div>
  );
};

export default Block;
