import Image from "next/image";
import React from "react";
import { Transition } from "../transition/Transition";
import Redondo from "@/src/redondo/Redondo";
import { Reveal } from "../reveal/Reveal";
import { IconDos, IconTres, IconUno } from "@/src/icons/IconsLibrary";

export default function Seccion1() {
  return (
    <div className="relative fullScreen flex justify-center">
      <Redondo />
      <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
        <div className="container ">
          <div className="flex-row space-y-4 py-8">
            <Transition>
              <h1 className="text-tWhite font-monse text-center text-xl tablet:text-3xl desktopK:text-5xl font-bold px-16">
                Desarrollo de software a tu medida
              </h1>
            </Transition>
            <Transition>
              <p className="text-tGrey font-monse text-center px-4 desktop:px-0 text-sm desktopK:text-lg">
                Impulsamos la innovación a través de soluciones tecnológicas de
                vanguardia, creando un futuro donde la excelencia y la
                eficiencia se encuentran
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
          <div className="mx-4 space-y-4">
            <Transition>
              <h1 className="text-tWhite text-center text-lg tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse mb-10">
                Soluciones de desarrollo tecnológico
              </h1>
            </Transition>
            <div className="flex flex-col gap-6 lg:flex-row w-full">
              <Reveal className="lg:w-1/3">
                <div className="flex items-center gap-6 bg-black-50 py-4 px-8 h-[115px] lg:flex-col lg:h-[330px] lg:py-12 border border-[#292929]">
                  <div className="w-12 h-12 flex justify-center items-center">
                    <IconUno
                      viewBox="0 0 26 29"
                      className="w-8 h-8 lg:w-12 lg:h-12"
                    />
                  </div>
                  <p className="text-tGrey text-left text-xs font-monse lg:text-center lg:text-base">
                    Nuestros productos van más allá de las soluciones, son la
                    encarnación de la excelencia técnica, diseñados para liderar
                    en la industria.
                  </p>
                </div>
              </Reveal>
              <Reveal className="lg:w-1/3">
                <div className="flex items-center gap-6 bg-black-50 py-4 px-8 h-[115px] lg:flex-col lg:h-[330px] lg:py-12 border border-[#292929]">
                  <div className="w-12 h-12 flex justify-center items-center">
                    <IconDos
                      viewBox="0 0 31 29"
                      className="w-8 h-8 lg:w-12 lg:h-12"
                    />
                  </div>
                  <p className="text-tGrey text-left text-xs font-monse lg:text-center lg:text-base">
                    Cada línea de código en nuestros productos es una promesa de
                    calidad inigualable y funcionalidad robusta. En FOS
                    Technologies, creamos una revolución tecnológica
                  </p>
                </div>
              </Reveal>
              <Reveal className="lg:w-1/3">
                <div className="flex items-center gap-6 bg-black-50 py-4 px-8 h-[115px] lg:flex-col lg:h-[330px] lg:py-12 border border-[#292929]">
                  <div className="w-12 h-12 flex justify-center items-center">
                    <IconTres
                      viewBox="0 0 31 29"
                      className="w-8 h-8 lg:w-12 lg:h-12"
                    />
                  </div>

                  <p className="text-tGrey text-left text-xs font-monse lg:text-center lg:text-base">
                    Descubra la potencia de la innovación con los productos de
                    FOS Technologies. Desde aplicaciones intuitivas hasta
                    plataformas empresariales, reflejan nuestro compromiso con
                    la calidad y la transformación digital
                  </p>
                </div>
              </Reveal>
            </div>

            {/* <div className="flex">
            <div className="flex justify-center items-center w-full">
              <div className="">
                <Reveal>
                  <div className="flex desktopK:block gap-7 bg-black-50 py-4 desktop:py-10 px-8 items-center">
                    <IconUno
                      viewBox="0 0 26 29"
                      className="w-[70px] tablet:w-[35px]  desktop:w-[35px] desktop:h-[35px]  desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
                    />
                    <p className="text-tGrey text-left  text-xs  font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                      Nuestros productos van más allá de las soluciones, son la
                      encarnación de la excelencia técnica, diseñados para
                      liderar en la industria.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="">
                <Reveal>
                  <div className="flex desktopK:block gap-7 bg-black-50 py-4 desktop:py-10 px-8 items-center ">
                    <IconDos
                      viewBox="0 0 31 29"
                      className="w-[90px] tablet:w-[45px]  desktop:w-[45px] desktop:h-[45px] desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
                    />
                    <p className="text-tGrey text-left  text-xs font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                      Cada línea de código en nuestros productos es una promesa
                      de calidad inigualable y funcionalidad robusta. En FOS
                      Technologies, creamos una revolución tecnológica
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="">
                <Reveal>
                  <div className="flex desktopK:block gap-7 bg-black-50 py-4 desktop:py-10 px-8 items-center ">
                    <IconTres
                      viewBox="0 0 31 29"
                      className="w-[120px]  tablet:w-[65px] desktop:w-[60px] desktop:h-[60px] desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
                    />
                    <p className="text-tGrey text-left text-xs font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                      Descubra la potencia de la innovación con los productos de
                      FOS Technologies. Desde aplicaciones intuitivas hasta
                      plataformas empresariales, reflejan nuestro compromiso con
                      la calidad y la transformación digital
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* <div className="flex-row space-y-4 ">
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
      </div> */}
    </div>
  );
}
