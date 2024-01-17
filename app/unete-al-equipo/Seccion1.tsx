import React from "react";
import Blog from "@/public/blog.png";
import Image from "next/image";
import { Transition } from "@/src/components/transition/Transition";
import { Reveal } from "@/src/components/reveal/Reveal";

export default function Seccion1() {
  return (
    <div className="relative  ">
      <div className="py-8">
        <Transition>
          <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
            Únete a este gran viaje
          </h1>
          <p className="text-tWhite font-monse text-center px-12 text-sm desktopK:text-lg py-8">
            Lorem ipsum dolor sit amet consectetur. Arcu leo arcu in nulla
            aenean risus sem. Tristique volutpat eget sit adipiscing quam
            pellentesque sed in.
          </p>
          <div className="w-full flex justify-center desktopK:my-12">
            <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 desktopK:py-4 px-8 desktopK:px-12 desktopK:text-2xl text-tWhite font-medium font-monse">
              Vacantes laborales
            </button>
          </div>
        </Transition>
      </div>
      <div className="bg-tWhite py-8">
        <Transition>
          <h1 className="text-tBlack text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
            Trabajamos en serio pero no somos aburridos
          </h1>
          <p className="text-tGrey font-monse text-center px-8 text-sm desktopK:text-lg py-4 desktopK:py-6">
            Nos tomamos muy en serio el trabajo que hacemos aquí, pero siempre
            encontramos la manera de fortalecer la amistad entre el equipo
          </p>
          <div className="w-full flex justify-center">
            <Image
              src={Blog}
              alt="Imagen unete"
              className="pb-8 px-4 desktop:w-[60%]"
            />
          </div>
        </Transition>
      </div>
    </div>
  );
}
