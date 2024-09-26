import { IconCondaty, IconElekta } from "@/src/icons/IconsLibrary";
import { Transition } from "../transition/Transition";

export default function Seccion2() {
  return (
    <div className="relative mb-40" id="productos">
      {/* <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center"> */}
      <div className="w-full ">
        {/* <div className="mx-4 space-y-4">
            <Transition>
              <h1 className="text-tWhite text-center text-lg tablet:text-3xl desktopK:text-5xl font-bold px-8 font-monse">
                Soluciones de desarrollo tecnológico
              </h1>
            </Transition>
            <div className="flex justify-center items-center w-full">
              <div className="desktop:max-w-[45%] laptop:max-w-[80%] desktopK:max-w-[40%]">
                <Reveal>
                  <div className="flex desktopK:block gap-7 bg-black-50 py-4 desktop:py-10 px-8 items-center">
                    <IconUno
                      viewBox="0 0 26 29"
                      className="w-[70px] tablet:w-[35px]  desktop:w-[35px] desktop:h-[35px]  desktopK:w-[70px] desktopK:h-[70px] desktopK:mx-auto"
                    />
                    <p className="text-tGrey text-left  text-xs  font-monse desktopK:text-center desktopK:w-full desktopK:text-base desktopK:pt-6">
                      Nuestros productos van más allá de las solucione, son la
                      encarnación de la excelencia técnica, diseñados para
                      liderar en la industria
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="desktop:max-w-[45%] laptop:max-w-[80%] desktopK:max-w-[40%]">
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
              <div className="desktop:max-w-[45%] laptop:max-w-[80%] desktopK:max-w-[40%]">
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
        <div className="flex justify-center">
          <div className="container py-4   ">
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
