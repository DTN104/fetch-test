import React from "react";
import "./top.scss";
import MyCoupon from "../my-coupon/MyCoupon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Top = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bgTop" />
      <div className="wrap-top">
        <div className="wrap-top__icon">
          <FontAwesomeIcon icon={faAngleLeft} onClick={() => navigate(-1)} />
        </div>
        <h1 className="wrap-top__main-title">Silver Tier</h1>
        <div className="wrap-top__description">
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </div>
      </div>
      <MyCoupon />
    </>
  );
};

export default Top;
