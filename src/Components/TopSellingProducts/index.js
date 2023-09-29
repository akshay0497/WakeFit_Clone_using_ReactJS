import React from "react";
import { ProductName } from "../../Data/TopSellingProducts";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopSellingProducts = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
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
    <div className="mx-10">
      <h1 className="text-2xl font-mono font-semibold my-5 text-[#333333]">
        Top Selling Products
      </h1>
      <Slider {...settings}>
        {ProductName.map((lst) => (
          <div className="mx-2 p-2">
            <div className="relative">
              <span className="absolute bg-gray-400/60 text-white text-sm p-1 rounded-tl-xl rounded-br-xl ">
                Best Seller
              </span>
              <img src={lst.src} className="bg-no-repeat rounded-t-lg" />
              <div className="absolute top-52 bg-white rounded-lg px-1 left-2 text-xs">
                <span>
                  {lst.rating}
                  <StarIcon
                    className="text-[#D24B39] mb-1"
                    style={{ fontSize: "small" }}
                  />
                  | 
                </span>
                <span> {lst.likes}</span>
              </div>
              <div className="absolute top-52 right-5 bg-white rounded-full w-6">
                <FavoriteBorderIcon
                  className="text-[#D24B39] ml-1 mb-1"
                  style={{ fontSize: "medium" }}
                />
              </div>
            </div>
            {/* <div  className="break-words" > */}
            <div className="text-xs h-7 p-2">
              <p>{lst.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="text-[#333333] font-semibold">₹{lst.discountprice}</div>
              <del className="text-[#c6c4c4] ">₹{lst.orgprice}</del>
            </div>
            <span className="text-[#d24b39] text-xs font-semibold px-2">{lst.discountpercentage}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TopSellingProducts;
