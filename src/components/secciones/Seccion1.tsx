import Image from "next/image";
import React from "react";
import { Transition } from "../transition/Transition";
import Redondo from "@/src/redondo/Redondo";

export default function Seccion1() {
  return (
    <div className="relative  fullScreen  ">
      <Redondo />
      <div className="flex-row space-y-4 py-8">
        <Transition>
          <h1 className="text-tWhite font-monse text-center text-xl tablet:text-3xl desktopK:text-5xl font-bold px-16">
            Desarrollo de software a tu medida
          </h1>
        </Transition>
        <Transition>
          <p className="text-tGrey font-monse text-center px-12 text-sm desktopK:text-lg">
            Impulsamos la innovación a través de soluciones tecnológicas de
            vanguardia, creando un futuro donde la excelencia y la eficiencia se
            encuentran
          </p>
        </Transition>
        <Transition>
          <div className="w-full flex justify-center desktopK:my-12">
            <a
              href="/#contactanos"
              className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-3 px-8 text-tWhite font-medium font-monse "
            >
              Hablemos
            </a>
          </div>
        </Transition>
      </div>
      <div className="flex-row space-y-4 ">
        <Transition>
          <h1 className="text-tWhite text-center text-xl tablet:text-3xl desktopK:text-5xl font-bold px-[50px] font-monse">
            Sé parte de la revolución tecnológica
          </h1>
        </Transition>
        <Transition>
          <p className="text-tGrey text-center px-12 text-sm font-monse desktopK:text-lg laptop:pb-8">
            Junto a nuestro gran equipo de profesionales que quieren dejar su
            huella en el mundo
          </p>
        </Transition>
        <div className="w-full flex justify-center  ">
          <Transition>
            <video
              controls
              className="w-300 tablet:w-[600px] laptop:w-[800px]  desktopK:w-[1120px]"
            ></video>
          </Transition>
        </div>
      </div>
    </div>
  );
}
