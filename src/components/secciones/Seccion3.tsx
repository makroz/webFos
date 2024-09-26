import Image from "next/image";
import React from "react";
import equipo from "@/public/equipo2.webp";
import Slide from "../Slide";

export default function Seccion3() {
  return (
    <div className="relative fullScreen " id="conocenos">
      <div className="flex absolute left-0 right-0 top-0 bottom-0 justify-center items-center">
        <div className="container">
          <h1 className="text-tWhite text-center text-2xl tablet:text-5xl mb-8 font-bold px-10 font-monse">
            Conoce cada talento del equipo
          </h1>
          <div className="w-full px-4 py-14 tablet:py-0 laptop:flex laptop:justify-center mb-4">
            <Image src={equipo} alt="Imagen equipo" />
          </div>
          <Slide />
        </div>
      </div>
    </div>
  );
}
