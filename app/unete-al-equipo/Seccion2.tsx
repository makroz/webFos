import { Reveal } from "@/src/components/reveal/Reveal";
import { Transition } from "@/src/components/transition/Transition";

export default function Seccion2() {
  return (
    <div className="">
      <div className="degradau px-4 flex justify-center py-8 desktop:py-10">
        <div className="container">
          <Transition>
            <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-4 font-monse mb-4">
              Beneficios por ser del team
            </h1>
          </Transition>
          <div className="flex flex-col desktop:flex-row gap-4 ">
            <div className="flex justify-center items-center w-full flex-grow basis-0 bg-black-50">
              <Reveal>
                <div className="py-8">
                  <h1 className="text-tWhite text-center text-xl tablet:text-3xl font-bold px-8 font-monse">
                    Reconocimiento
                  </h1>
                  <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                    Tu esfuerzo es recompensado Valoramos mucho ese 10% más que
                    le pones a tu trabajo
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="flex justify-center items-center w-full flex-grow basis-0 bg-black-50">
              <Reveal>
                <div className="py-8">
                  <h1 className="text-tWhite text-center text-xl  tablet:text-3xl  font-bold px-8 font-monse">
                    Proyección de carrera
                  </h1>
                  <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                    Lleva proyectos, lidera un equipo, experimenta otros cargos
                    Aquí vas a crecer
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="flex justify-center items-center w-full flex-grow basis-0 bg-black-50">
              <Reveal>
                <div className="py-8">
                  <h1 className="text-tWhite text-center text-xl tablet:text-3xl font-bold px-8 font-monse">
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
    </div>
  );
}
