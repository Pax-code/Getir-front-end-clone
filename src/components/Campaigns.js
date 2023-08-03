import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from "../api/banners.json";
import Title from "../components/ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2 `}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevtBtn(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2 `}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </div>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,

    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:mt-10 md:mb-10">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider {...settings} className="md:-mx-2">
        {banners.length &&
          banners.map((banner) => (
            <div key={banner.id}>
              <picture className="block md:px-2 ">
                <img className="md:rounded-lg" src={banner.image} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
