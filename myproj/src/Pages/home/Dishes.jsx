import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../Components/Cards";

const Dishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipes(specials);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
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
    <div className="max-w-screen-2xl container  xl:px-24 px-4  border-r-8   py-16">
      <div className="">
        <p className="text-[#7a1f12] uppercase tracking-wide font-medium text-lg">
          special dishes
        </p>
        <h1 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
          Standout Dishes From Our Menu
        </h1>
      </div>
      <div>
        <Slider {...settings}>
          {recipes.map((item, i) => (
            <Cards key={i} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Dishes;
