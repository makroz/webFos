import {
  IconCondaty,
  IconDos,
  IconTres,
  IconUno,
} from "@/src/icons/IconsLibrary";
import React from "react";
import { Reveal } from "../reveal/Reveal";
import { Transition } from "../transition/Transition";

export default function Seccion2() {
  return (
    <div className="relative fullScreen" id="productos">
      <div className="mx-4 space-y-4">
        <Transition>
          <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
            Soluciones de desarrollo tecnológico
          </h1>
        </Transition>
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="flex desktopK:block gap-7 bg-black-50 py-7 desktop:py-10 px-8 items-center">
              <IconUno
                viewBox="0 0 26 29"
                className="w-[27px] h-[27px] desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
              />
              <p className="text-tGrey text-left  text-xs w-[75%] font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                Una visión diferente acerca de cómo solucionar con tecnología o
                desarrollo el problema que tienen.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="flex desktopK:block gap-7 bg-black-50 py-7 desktop:py-10 px-8 items-center ">
              <IconDos
                viewBox="0 0 31 29"
                className="w-[27px] h-[27px] desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
              />
              <p className="text-tGrey text-left  text-xs w-[75%] font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                Una visión diferente acerca de cómo solucionar con tecnología o
                desarrollo el problema que tienen.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="flex justify-center items-center w-full">
          <Reveal>
            <div className="flex desktopK:block gap-7 bg-black-50 py-7 desktop:py-10 px-8 items-center ">
              <IconTres
                viewBox="0 0 31 29"
                className="w-[27px] h-[27px] desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
              />
              <p className="text-tGrey text-left text-xs w-[75%] font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                Una visión diferente acerca de cómo solucionar con tecnología o
                desarrollo el problema que tienen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="bg-tWhite mt-4 py-4 tablet:py-10">
        <Transition>
          <h1 className="font-bold text-xl tablet:text-5xl text-center text-tBlack font-monse desktopK:pt-10">
            Nuestros productos
          </h1>
          <div className="tablet:flex justify-center">
            <div className="flex justify-center items-center">
              <IconCondaty viewBox="0 0 252 168" size={200} />
            </div>
            <div className="px-10 tablet:flex justify-center items-center">
              <div>
                <h1 className="font-bold text-xl tablet:text-4xl desktopK:text-5xl text-center tablet:text-left text-tBlack font-monse">
                  Condaty
                </h1>
                <p className="text-center font-bold tablet:font-normal text-tBlack tablet:text-tGrey desktopK:text-lg font-monse ">
                  Software de gestión de condominios y edificios
                </p>
                {/* <p className="text-center text-tGrey">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut al{" "}
          </p> */}
                <div className="flex justify-center tablet:justify-start items-center my-2">
                  <a
                    href="https://www.condaty.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-6 text-tWhite font-medium font-monse "
                  >
                    Conoce Condaty
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}
