import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "@/src/icons/IconsLibrary";
import React from "react";
import { IconLogoFosGris } from "../../icons/IconsLibrary";
import { Transition } from "../transition/Transition";

export const Footer = () => {
  return (
    <footer className="px-4 tablet:px-6 desktop:mx-[160px] desktopK:mx-[380px]">
      <Transition>
        <div className="tablet:flex space-y-6 tablet:space-y-0 tablet:pb-20 justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-monse text-tWhite">Información</p>
            <a href="" className="text-tGrey font-light font-monse">
              Acerca de nosotros
            </a>
            <a href="" className="text-tGrey font-light font-monse">
              Productos
            </a>
            <a href="" className="text-tGrey font-light font-monse">
              Precios
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-tWhite font-monse">Legal</p>
            <a href="" className="text-tGrey font-light font-monse">
              Términos y condiciones
            </a>
            <a href="" className="text-tGrey font-light font-monse">
              Políticas de privacidad
            </a>
            <a href="" className="text-tGrey font-light font-monse">
              Información del Copyright
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-tWhite font-monse">Soporte</p>
            <a href="" className="text-tGrey font-light font-monse">
              Preguntas frecuentes
            </a>
            <a href="" className="text-tGrey font-light font-monse">
              Contactar
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-tWhite font-monse">Redes sociales</p>
            <div className="flex gap-4">
              <a className="bg-black-50 p-2">
                <IconFacebook />
              </a>
              <a className="bg-black-50 p-2">
                <IconInstagram />
              </a>
              <a className="bg-black-50 p-2">
                <IconTwitter />
              </a>
              <a className="bg-black-50 p-2">
                <IconLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border mt-20" />
        <div className="flex gap-10 ">
          <div>
            <IconLogoFosGris size={112} viewBox="0 0 112 45" />
          </div>
          <div className="flex items-end mb-7">
            <p className="text-tGrey font-monse font-light">
              Copyright © 2023 FOS Technologies Inc. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </Transition>
    </footer>
  );
};
