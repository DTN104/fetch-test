import React, { useEffect, useState } from "react";
import "./silver-tier.scss";
import Top from "../../components/top/Top";
import Block from "../../components/block/Block";
import axios from "axios";

const SilverTier = () => {
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then(function (response) {
      setBlocks(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="container">
      <Top />
      {blocks.map((block, index) => (
        <Block blockName={block.name} key={index} cards={block.benefits} />
      ))}
    </div>
  );
};

export default SilverTier;
