import Blog from "@/public/blog.webp";
import Image from "next/image";
import { Transition } from "@/src/components/transition/Transition";

export default function Seccion1() {
  return (
    <div className="relative flex  justify-center items-center ">
      <div className="container ">
        <div className="py-8">
          <Transition>
            <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
              Únete a este gran viaje
            </h1>
            <p className="text-tWhite font-monse text-center px-12 text-sm desktopK:text-lg py-8">
              Sé protagonista de un viaje lleno de desafíos y logros. Encuentra
              tu lugar en nuestra familia laboral y crece con nosotros
            </p>
            <div className="w-full flex justify-center desktopK:my-12">
              <button className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 desktopK:py-4 px-8 desktopK:px-12 desktopK:text-2xl text-tWhite font-medium font-monse">
                Vacantes laborales
              </button>
            </div>
          </Transition>
        </div>
        <div className="bg-transparent py-8">
          <Transition>
            <h1 className="text-tWhite text-center text-2xl tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
              Trabajamos en serio pero no somos aburridos
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-tGrey font-monse text-center text-sm tablet:w-4/5 w-full  desktopK:text-2xl laptop:w-3/5 py-4 desktopK:py-6 desktop:w-1/2">
                Nos tomamos muy en serio el trabajo que hacemos aquí, pero
                siempre encontramos la manera de fortalecer la amistad entre el
                equipo
              </p>
            </div>
            <div>
              <Image src={Blog} alt="Imagen unete" className="w-full" />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
}
