import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          preview={false}
          width="465px"
          height="274px"
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
