import React from "react";
import "./tier.scss";
import { Link } from "react-router-dom";
import Gold from "../../images/gold.png";
import Silver from "../../images/silver.png";
import Diamond from "../../images/diamond.png";
import Platium from "../../images/platium.png";
import Bronze from "../../images/bronze.png";

const Tier = () => {
  return (
    <>
      <div className="wrap-tier">
        <h1>Tier List</h1>
        <div>
          <img src={Diamond} />
          <Link to="diamond-tier">
            <span>Diamond</span>
          </Link>
        </div>
        <div>
          <img src={Platium} />
          <Link to="platium-tier">
            <span>Platium</span>
          </Link>
        </div>
        <div>
          <img src={Gold} />
          <Link to="gold-tier">
            <span>Gold</span>
          </Link>
        </div>
        <div>
          <img src={Silver} />
          <Link to="silver-tier">
            <span>Silver</span>
          </Link>
        </div>
        <div>
          <img src={Bronze} />
          <Link to="bronze-tier">
            <span>Bronze</span>
          </Link>
        </div>
        <p className="license">Copyright Nguyen Tien Dat</p>
      </div>
    </>
  );
};

export default Tier;
