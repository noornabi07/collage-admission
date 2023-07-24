import  { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testamonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://e-commerce-site-back-end.vercel.app/admissionApply");
      const data = await res.json();
      setReview(data);
    };
    load();
  }, [review]);
  return (
   <>
   <h1 className="text-center font-bold text-4xl mt-10">Students Review</h1>
    <div className="flex items-center justify-center mt-10 mx-16">
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
        {review.map((r) => {
          const { CollegeName, candidateName, review, photo, _id } = r;
          return (
            <SwiperSlide key={_id}>
              <div className=" border border-none box-border p-16 rounded-lg shadow-2xl text-black">
                <div className="lg:flex items-center gap-5">
                  <div className="w-20 rounded-full">
                    <img src={photo} alt="" />
                  </div>
                  <div>
                    <h1 className="text-left font-bold text-2xl">
                      {CollegeName}
                    </h1>
                    {/* <h1 className="text-left font-bold text-2xl">
                      {candidateName}
                    </h1> */}
                  </div>
                </div>
                <p className="text-lg italic my-4">{review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
   </>
  );
};

export default Testamonial;
