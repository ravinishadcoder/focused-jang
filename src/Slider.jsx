import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
function MultipleRows() {
  let arr = Array.from({ length: 20 }, (_, i) => i + 1);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    afterChange: () => handleColor(),
  };
  const handleColor = () => {
    // Select all the active slides
    const activeSlides = document.querySelectorAll(
      ".slick-slide.slick-active:not(.slick-cloned)"
    );

    // Remove any previous 'last-active' class
    document.querySelectorAll(".slick-slide.last-active").forEach((slide) => {
      slide.classList.remove("last-active");
    });

    // Add the 'last-active' class to the last active slide
    if (activeSlides.length) {
      activeSlides[activeSlides.length - 1].classList.add("last-active");
    }
  };

  useEffect(() => {
    handleColor();
  }, []);
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arr.map((el) => (
          <div key={el}>
            <div
              className="your-item"
              //   style={{ borderRight: "1px solid black" }}
            >
              <h3>{el}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleRows;
