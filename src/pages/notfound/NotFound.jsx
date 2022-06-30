import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="notfound-wrap">
      <h1>COMING SOON!</h1>
      <h2>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to previous page</span>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
