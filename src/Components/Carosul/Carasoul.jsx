import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { img } from './img/data';
import classes from './carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarasoulEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageLink) => {
          return <img src={imageLink} />;
        })}
      </Carousel>
      <div className={classes. hero_image}></div>
    </div>
  );
}

export default CarasoulEffect
