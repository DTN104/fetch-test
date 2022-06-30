import React, { useContext } from "react";
import "./my-coupon.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const MyCoupon = () => {
  const myCoin = useContext(CoinContext);
  return (
    <div className="wrap-my-coupon">
      <div className="coupon">
        <div className="coupon__text">Available Coin balance</div>
        <div className="coupon__coin-balance">340</div>
        <div className="coupon__progress-bar">
          <div className="coupon__progress-bar-current" />
        </div>
        <div className="coupon__condition">
          You have paid rental fee for $1,200. <br />
          Pay more $800 to achieve Gold Tier.
        </div>
      </div>
      <div className="benefit-link">
        <Link to="benefits">
          <span>View tier benefits</span>
          <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      <div className="btn-coupon">
        <Link to="my-coupon">My Coupons</Link>
      </div>
      <div className="center">Updated : 02/11/2021</div>
    </div>
  );
};

export default MyCoupon;
