import { Reveal } from "@/src/components/reveal/Reveal";
import React from "react";

export default function Seccion3() {
  return (
    <div className="my-20">
      <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse py-4">
        Únete a este gran viaje
      </h1>
      <div className="px-4 desktop:flex gap-8 ">
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="bg-black-50 mb-4 py-8 px-8 desktop:h-56 ">
              <h1 className="text-tWhite text-center text-xl laptop:text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
                QA Tester
              </h1>
              <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                ¿Te gusta quebrar cosas y corregir los errores de la gente?
              </p>
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                Postula
              </button>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="bg-black-50 mb-4 py-8  px-8 desktop:h-64  desktop:flex desktop:items-center">
              <div>
                <h1 className="text-tWhite text-center text-xl laptop:text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
                  Developer Full Stack
                </h1>
                <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                  ¿Te gusta quebrar cosas y corregir los errores de la gente?
                </p>
                <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                  Postula
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="bg-black-50 mb-4 py-8 px-8 desktop:h-56">
              <h1 className="text-tWhite text-center text-xl laptop:text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
                Project Manager
              </h1>
              <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                ¿Te gusta quebrar cosas y corregir los errores de la gente?
              </p>
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                Postula
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
