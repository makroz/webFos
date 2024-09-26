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
    <footer className="w-full px-4 tablet:px-6  flex justify-center">
      <div className="container ">
        <Transition>
          <div className="tablet:flex space-y-6 tablet:space-y-0 tablet:pb-20 justify-between">
            <div className="flex flex-col gap-2">
              <p className="font-monse text-tWhite">Información</p>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Acerca de nosotros
              </a>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Productos
              </a>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Precios
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-tWhite font-monse">Legal</p>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Términos y condiciones
              </a>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Políticas de privacidad
              </a>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Información del Copyright
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-tWhite font-monse">Soporte</p>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Preguntas frecuentes
              </a>
              <a
                href=""
                className="text-tGrey font-light font-monse hover:underline hover:text-tFos"
              >
                Contactar
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-tWhite font-monse">Redes sociales</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100095684375403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-50 p-2"
                >
                  <IconFacebook />
                </a>
                <a
                  href="https://www.instagram.com/fos.technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-50 p-2"
                >
                  <IconInstagram />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-50 p-2 hidden"
                >
                  <IconTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/fos-technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-50 p-2"
                >
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
                Copyright © 2023 FORCEONE SYSTEM TECHNOLOGIES S.R.L Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </footer>
  );
};
