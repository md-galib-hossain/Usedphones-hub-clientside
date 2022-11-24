import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div className="my-5">
      {/* 
      https://i.ibb.co/h2NhFVn/slide1.png https://i.ibb.co/0QCJ4PW/slide2.png
      https://i.ibb.co/wMzM4R3/slide3.png */}
      <Carousel>
        <div>
          <img src={"https://i.ibb.co/h2NhFVn/slide1.png"} />
        </div>
        <div>
          <img src={"https://i.ibb.co/0QCJ4PW/slide2.png"} />
        </div>
        <div>
          <img src={"https://i.ibb.co/wMzM4R3/slide3.png"} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
