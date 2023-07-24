import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import SearchBar from "./SearchBar";
import image1 from "../../src/assets/banner.jpg";


import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div>
        <SearchBar></SearchBar>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative">
                <img src={image1} className="h-[50vh] opacity-100 lg:h-full w-full"  alt="" />
                <div className="absolute lg:top-52 top-10 lg:left-80">
                  <h4 className="text-white font-semibold bg-lime-600 p-2 w-72 mx-auto  text-xl text-center">
                    Wellcome to Our Vercity
                  </h4>
                  <h1 className="text-white font-extrabold text-5xl pt-3 text-center">
                    Education is the Best Key <br /> Success in Life
                  </h1>
                  <div className="flex justify-center items-center lg:gap-24 gap-5 pt-5">
                    <Link to="/colleges">
                      <button className="text-white border  hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out   bg-lime-600 px-10 py-3 rounded">
                        All College
                      </button>
                    </Link>
                    <button className="text-white border px-10 py-3 rounded hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
