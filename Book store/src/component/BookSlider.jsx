import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const BookSlider = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4">
        <div>
          <h1 className="font-semibold text-2xl">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nihil quidem illum provident necessitatibus labore aut expedita
            recusandae adipisci doloribus eius ad non unde optio ut consectetur
            velit, excepturi nemo!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            <div className="mt-6">
              <Card />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default BookSlider;
