import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles.css";
import banner1 from "../banner1.png";
import banner3 from "../banner3.png";
import banner5 from "../banner5.png";
import banner6 from "../banner6.png";
import banner7 from "../banner7.png";
import banner8 from "../banner8.png";

const MySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: "ondemand", // Use lazy load to load images as needed
    autoplaySpeed: 2000,
    className: "slick-main",
    dotsClass: "button__bar", // Custom class for dots
    arrows: false, // Hide the left/right arrows
    beforeChange: (prev, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul> {/* Custom dot placement */}
      </div>
    ),
    customPaging: (index) => (
      <button
        style={index === currentSlide ? { backgroundColor: "#005287" } : null}
      ></button>
    ),
  };

  return (
    <Slider {...settings}>
      {/* Slide 1 */}
      <div>
        <img src={banner7} alt="Slide 3" width="100%" height="400px" />
        <div style={{ position: "relative" }}>
        </div>
      </div>
      <div>
        <img src={banner1} alt="Slide 1" width="100%" height="400px" />
        <div style={{ position: "relative" }}>
        </div>
      </div>

      {/* Slide 2 */}
      <div>
        <img src={banner3} alt="Slide 2" width="100%" height="400px" />
      </div>

      <div>
        <img src={banner8} alt="Slide 3" width="100%" height="400px" />
        <div style={{ position: "relative" }}>
        </div>
      </div>
      {/* Slide 3 */}
      <div>
        <img src={banner5} alt="Slide 3" width="100%" height="400px" />
        <div style={{ position: "relative" }}>
        </div>
      </div>

      <div>
        <img src={banner6} alt="Slide 3" width="100%" height="400px" />
        <div style={{ position: "relative" }}>
        </div>
      </div>

    </Slider>
  );
};

export default MySlider;
