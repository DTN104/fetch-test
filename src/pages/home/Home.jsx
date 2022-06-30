import React from "react";
import SilverTier from "../silver-tier/SilverTier";
import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Home;
