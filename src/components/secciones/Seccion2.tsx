import { IconCondaty, IconElekta } from "@/src/icons/IconsLibrary";
import { Transition } from "../transition/Transition";

export default function Seccion2() {
  return (
    <div className="relative mb-40" id="productos">
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"> */}
      <div className="w-full ">
        <div className="flex justify-center">
          <div className="container py-4">
            <Transition>
              <h1 className="font-bold text-xl tablet:text-5xl text-center text-tWhite font-monse">
                Nuestros productos
              </h1>
              <div className="desktop:flex desktop:mt-20">
                <div className="tablet:flex justify-center items-center tablet:pt-6">
                  <div className="tablet:flex ">
                    <div className="flex justify-center tablet:justify-end items-center tablet:w-1/2">
                      <IconCondaty viewBox="0 0 252 168" size={190} />,
                    </div>
                    <div className="px-10 tablet:flex justify-center items-center tablet:w-1/2">
                      <div>
                        <h1 className="font-bold text-xl tablet:text-4xl desktopK:text-5xl text-center tablet:text-left text-tWhite font-monse">
                          Condaty
                        </h1>
                        <p className="text-center tablet:text-left font-semibold text-sm tablet:py-2 text-tGrey desktopK:text-base font-monse ">
                          Software para la gestión de condominios y edificios
                        </p>
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
                </div>
                <div className="tablet:flex justify-center items-center tablet:pt-6">
                  <div className="tablet:flex ">
                    <div className="flex justify-center tablet:justify-end items-center tablet:w-1/2">
                      <IconElekta size={200} />
                    </div>
                    <div className="px-10 tablet:flex justify-center items-center tablet:w-1/2">
                      <div>
                        <h1 className="font-bold text-xl tablet:text-4xl desktopK:text-5xl text-center tablet:text-left text-tWhite font-monse">
                          Elekta
                        </h1>
                        <p className="text-center tablet:text-left font-semibold text-sm tablet:py-2 text-tGrey desktopK:text-base font-monse ">
                          La plataforma para gestión política
                        </p>
                        <div className="flex justify-center tablet:justify-start items-center my-2">
                          <a
                            href="https://www.elekta.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-6 text-tWhite font-medium font-monse "
                          >
                            Conoce Elekta
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
