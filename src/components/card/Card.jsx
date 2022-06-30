import React, { useContext } from "react";
import { CoinContext } from "../../pages/silver-tier/SilverTier";
import "./card.scss";

const Card = (props) => {
  const imgSrc = require(`../../images/${props.img}`);
  const myCoin = useContext(CoinContext);
  return (
    <div className="card-wrap">
      <img className="card-wrap__img" src={imgSrc} />
      <div className={`card-wrap__coin ${props.limited == 1 ? "limited" : ""}`}>
        {props.limited == 1 && <span className="limited-icon">L</span>}
        {props.require} Coins
      </div>
      <div className="card-wrap__description">{props.description}</div>
      {myCoin < props.require && (
        <div className="card-wrap__err">Insufficient coins</div>
      )}
    </div>
  );
};

export default Card;
