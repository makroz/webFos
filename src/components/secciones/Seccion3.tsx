import Image from "next/image";
import React from "react";
import equipo from "@/public/equipo.webp";
import Slide from "../Slide";

export default function Seccion3() {
  return (
    <div className="relative fullScreen " id="conocenos">
      <div className="flex absolute left-0 right-0 top-0 bottom-0 justify-center items-center">
        <div className="w-full">
          <h1 className="text-tWhite text-center text-2xl tablet:text-3xl font-bold px-10 font-monse">
            Conoce cada talento del equipo
          </h1>
          <div className="w-full px-4 py-14 tablet:py-0 laptop:flex laptop:justify-center">
            <Image
              src={equipo}
              alt="Imagen equipo"
              className="w-[100%] py-4 laptop:w-[790px] desktop:w-[48.5%] desktopK:w-[47%]"
            />
          </div>
          <Slide />
        </div>
      </div>
    </div>
  );
}
