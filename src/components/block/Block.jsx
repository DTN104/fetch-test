import React, { useState, useEffect } from "react";
import "./block.scss";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

const Block = (props) => {
  const cards = props.cards;
  return (
    <div className="block-wrap">
      <div className="block-title">{props.blockName}</div>
      <Swiper
        loop={true}
        direction={"horizontal"}
        centeredSlides={false}
        slidesPerView={1.6}
        spaceBetween={0}>
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              img={card.img}
              require={card.require}
              description={card.description}
              limited={card.limited}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Block;
