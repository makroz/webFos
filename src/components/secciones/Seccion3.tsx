import Image from "next/image";
import React from "react";
import equipo from "@/public/equipo.webp";
import ImageBrenda from "@/public/fotoBrenda.webp";
import Slide from "../Slide";
import Redondo from "@/src/redondo/Redondo";

export default function Seccion3() {
  return (
    <div className="relative fullScreen " id="conocenos">
      <div className="pt-14 desktop:py-6">
        <h1 className="text-tWhite text-center text-2xl tablet:text-3xl font-bold px-10 font-monse">
          Conoce cada talento del equipo
        </h1>
        <div className="w-full px-4 py-14 tablet:py-0 laptop:flex laptop:justify-center">
          <Image
            src={equipo}
            alt="Imagen equipo"
            className="w-[100%] py-4 laptop:w-[790px] desktop:w-[48.5%] desktopK:w-[47%]"
          />
          {/* <div className="tablet:flex tablet:hidden">
            <div className="flex justify-center items-center">
              <Image
                src={ImageBrenda}
                className="w-[96px] tablet:w-[450px]"
                alt="Imagen CEO"
              />
            </div>
            <div className="tablet:p-6">
              <h1 className="text-tWhite text-center tablet:text-left text-xl font-bold py-2 font-monse">
                Brenda Melani Velasquez Jordan
              </h1>
              <p className="text-tWhite text-center tablet:text-left font-light pb-4 font-monse">
                CEO
              </p>
              <p className="text-tWhite text-center text-sm tablet:text-left font-light font-monse">
                Lorem ipsum dolor sit amet consectetur. Arcu leo arcu in nulla
                aenean risus sem. Tristique volutpat eget sit adipiscing quam
                pellentesque sed in. Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div> */}
        </div>

        <Slide />
      </div>
    </div>
  );
}
