import { Reveal } from "@/src/components/reveal/Reveal";
import { Transition } from "@/src/components/transition/Transition";
import React from "react";

export default function Seccion2() {
  return (
    <div className="">
      <div className="degradau px-4 py-8 desktop:py-10">
        <Transition>
          <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-4 font-monse mb-4">
            Beneficios por ser del team
          </h1>
        </Transition>
        <div className="desktop:flex gap-4 ">
          <div className="flex justify-center items-center w-full">
            <Reveal>
              <div className="bg-black-50 mb-4 py-8 desktop:h-[185px]  desktopK:h-52">
                <h1 className="text-tWhite text-center text-xl tablet:text-3xl laptop:text-2xl desktopK:text-5xl font-bold px-8 font-monse">
                  Reconocimiento
                </h1>
                <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                  Tu esfuerzo es recompensado Valoramos mucho ese 10% más que le
                  pones a tu trabajo
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center items-center w-full">
            <Reveal>
              <div className="bg-black-50 mb-4 py-8 desktop:h-[185px] desktopK:h-52">
                <h1 className="text-tWhite text-center text-xl  tablet:text-3xl laptop:text-2xl desktopK:text-5xl font-bold px-8 font-monse">
                  Proyección de carrera
                </h1>
                <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                  Lleva proyectos, lidera un equipo, experimenta otros cargos
                  Aquí vas a crecer
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center items-center w-full">
            <Reveal>
              <div className="bg-black-50 mb-4 py-8 desktop:h-[185px]  desktopK:h-52">
                <h1 className="text-tWhite text-center text-xl tablet:text-3xl laptop:text-2xl desktopK:text-5xl font-bold px-8 font-monse">
                  Cursos y formaciones
                </h1>
                <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                  ¿Quieres capacitarte más en un área? Tenemos cursos para que
                  seas el mejor en lo que haces
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
