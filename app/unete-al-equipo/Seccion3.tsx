import { Reveal } from "@/src/components/reveal/Reveal";

export default function Seccion3() {
  return (
    <div className="my-20 flex justify-center">
      <div className="container">
        <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse py-4">
          Únete a este gran viaje
        </h1>
        <div className="flex flex-col desktop:flex-row gap-8 w-full ">
          <div className="flex justify-center items-center w-full bg-black-50 py-8 px-8  border border-[#292929]">
            <Reveal>
              <h1 className="text-tWhite text-center text-xl laptop:text-2xl  font-bold px-8 font-monse">
                QA Tester
              </h1>
              <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                ¿Te gusta quebrar cosas y corregir los errores de la gente?
              </p>
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                Postula
              </button>
            </Reveal>
          </div>
          <div className="flex justify-center items-center w-full bg-black-50  py-8 px-8 border border-[#292929]">
            <Reveal>
              <h1 className="text-tWhite text-center text-xl laptop:text-2xl  font-bold px-8 font-monse">
                Developer Full Stack
              </h1>
              <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                ¿Te gusta quebrar cosas y corregir los errores de la gente?
              </p>
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                Postula
              </button>
            </Reveal>
          </div>
          <div className="flex justify-center items-center w-full bg-black-50 py-8 px-8 border border-[#292929]">
            <Reveal>
              <h1 className="text-tWhite text-center text-xl laptop:text-2xl font-bold px-8 font-monse">
                Project Manager
              </h1>
              <p className="text-tWhite font-monse text-center px-8 text-sm desktopK:text-lg py-4">
                ¿Te gusta quebrar cosas y corregir los errores de la gente?
              </p>
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full">
                Postula
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
