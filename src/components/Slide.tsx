// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { equipo } from "../utils/data";
import { Reveal } from "./reveal/Reveal";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export default function Slide() {
  return (
    <div className="mx-4 ">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          678: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        navigation={true}
        freeMode={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=" w-full laptop:w-[75%]  desktop:w-[48.42%]"
      >
        {equipo.map(({ id, name, cargo, descrip, image }) => (
          <SwiperSlide key={id} className="cursor-pointer bg-black-50">
            <Reveal>
              <div className="flex tablet:block">
                <div className="w-[35%] tablet:w-full">
                  <Image
                    src={image}
                    className="w-[400px]"
                    alt={`Imagen ${name}`}
                  />
                </div>
                <div className="w-[65%] tablet:w-full p-4 tablet:p-2 desktop:h-[80px] ">
                  <h1 className="text-tWhite font-monse font-bold tablet:text-sm">
                    {name}
                  </h1>
                  <p className="text-tWhite text-xs pb-4 tablet:pb-0 font-monse tablet:py-2">
                    {cargo}
                  </p>
                  <p className="text-tGrey break-words text-sm font-light font-monse tablet:hidden">
                    {descrip}
                  </p>
                </div>
              </div>
            </Reveal>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
