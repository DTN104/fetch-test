import React, { useEffect, useState, createContext } from "react";
import "./silver-tier.scss";
import Top from "../../components/top/Top";
import Block from "../../components/block/Block";
import axios from "axios";

const SilverTier = () => {
  const CoinContext = createContext();
  const myCoin = 340;
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories").then(function (response) {
      setBlocks(response.data);
    });
  }, []);
  return (
    <CoinContext.Provider value={myCoin}>
      <div className="container">
        <Top coin={myCoin} />
        {blocks.map((block, index) => (
          <Block
            coin={myCoin}
            blockName={block.name}
            key={index}
            cards={block.benefits}
          />
        ))}
      </div>
    </CoinContext.Provider>
  );
};

export default SilverTier;
