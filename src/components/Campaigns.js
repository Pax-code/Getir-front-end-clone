import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",

    nextArrow: <NextBtn />,
    prevArrow: <PrevtBtn />,
  };

  return (
    <div className="container mx-auto mt-10 mb-10">
      <Title>Kampanyalar</Title>
      <Slider {...settings} className="-mx-2">
        {banners.length &&
          banners.map((banner) => (
            <div key={banner.id}>
              <picture className="block px-2 ">
                <img className="rounded-lg" src={banner.image} />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
