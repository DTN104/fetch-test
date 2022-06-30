import React from "react";
import "./bottom.scss";
import Mail from "../../images/mail.svg";
import Noti from "../../images/noti.svg";
import Inventory from "../../images/inventory.svg";
import Profile from "../../images/profile.svg";

const Bottom = () => {
  return (
    <div className="wrap-bottom">
      <div className="wrap-bottom-icon">
        <div className="active-icon deactive"></div>
        <img src={Mail} />
      </div>
      <div className="wrap-bottom-icon">
        <div className="active-icon"></div>
        <img src={Noti} />
      </div>
      <div className="wrap-bottom-icon">
        <div className="active-icon deactive"></div>
        <img src={Inventory} />
      </div>
      <div className="wrap-bottom-icon">
        <div className="active-icon deactive"></div>
        <img src={Profile} />
      </div>
    </div>
  );
};

export default Bottom;
