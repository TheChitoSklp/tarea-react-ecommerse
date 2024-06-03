import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
export const Carousel = ({ collections }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel">
      <Slider className="slider" {...settings}>
        {collections.map((collection) => (
          <Link
            className="product-card"
            key={collection.item_id}
            to={`/products/${collection.item_id}`}
          >
            <ProductCard collections={collection} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};
