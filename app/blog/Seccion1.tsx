"use client";
import React, { useState } from "react";
import Image from "next/image";
import Blog from "@/public/blog.webp";
import { Transition } from "@/src/components/transition/Transition";
import { Reveal } from "@/src/components/reveal/Reveal";

export default function Seccion1() {
  const [showFullText, setShowFullText] = useState(false);

  const handleButtonClick = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mb-8">
      <div className="w-full flex justify-center my-8">
        <Transition>
          <div className="p-2 bg-transparent border">
            <h1 className="text-tWhite font-bold font-monse text-[42px]">
              El Blog
            </h1>
          </div>
        </Transition>
      </div>
      <div className="flex">
        <Transition>
          <div className="bg-black-50 mx-6 px-4 py-8">
            <Image src={Blog} className="w-full" alt="Imagen blog" />
            <h1 className="text-tWhite font-monse text-center text-lg tablet:text-3xl desktopK:text-5xl font-bold pt-3">
              Cómo las nuevas tecnologías están mejorando nuestra calidad de
              vida
            </h1>
            <p
              className={`text-tGrey font-monse text-center text-xs desktopK:text-lg overflow-hidden transition-max-height mt-2`}
            >
              {showFullText ? (
                <>
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida Descubre cómo la adopción de
                  tecnologías innovadoras como Condaty está transformando
                  nuestro día a día y mejorando significativamente nuestra
                  calidad de vida. Descubre cómo la adopción de tecnologías
                  innovadoras como Condaty está transformando nuestro día a día
                  y mejorando significativamente nuestra calidad de vida.
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida. Descubre cómo la adopción de
                  tecnologías innovadoras como Condaty está transformando
                  nuestro día a día y mejorando significativamente nuestra
                  calidad de vida. Descubre cómo la adopción de tecnologías
                  innovadoras como Condaty está transformando nuestro día a día
                  y mejorando significativamente nuestra calidad de vida.
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida.
                </>
              ) : (
                <>
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida.{" "}
                </>
              )}
              <button
                className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full mt-4"
                onClick={handleButtonClick}
              >
                {!showFullText ? "Leer más" : "Leer menos"}
              </button>
            </p>
          </div>
        </Transition>
        <Transition>
          <div className="bg-black-50 mx-6 px-4 py-8 hidden desktop:block">
            <Image src={Blog} className="w-full" alt="Imagen blog" />
            <h1 className="text-tWhite font-monse text-center text-lg tablet:text-3xl desktopK:text-5xl font-bold pt-3">
              Cómo las nuevas tecnologías están mejorando nuestra calidad de
              vida
            </h1>
            <p
              className={`text-tGrey font-monse text-center text-xs desktopK:text-lg overflow-hidden transition-max-height mt-2`}
            >
              {showFullText ? (
                <>
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida Descubre cómo la adopción de
                  tecnologías innovadoras como Condaty está transformando
                  nuestro día a día y mejorando significativamente nuestra
                  calidad de vida. Descubre cómo la adopción de tecnologías
                  innovadoras como Condaty está transformando nuestro día a día
                  y mejorando significativamente nuestra calidad de vida.
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida. Descubre cómo la adopción de
                  tecnologías innovadoras como Condaty está transformando
                  nuestro día a día y mejorando significativamente nuestra
                  calidad de vida. Descubre cómo la adopción de tecnologías
                  innovadoras como Condaty está transformando nuestro día a día
                  y mejorando significativamente nuestra calidad de vida.
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida. Descubre cómo la
                  adopción de tecnologías innovadoras como Condaty está
                  transformando nuestro día a día y mejorando significativamente
                  nuestra calidad de vida.
                </>
              ) : (
                <>
                  Descubre cómo la adopción de tecnologías innovadoras como
                  Condaty está transformando nuestro día a día y mejorando
                  significativamente nuestra calidad de vida.{" "}
                </>
              )}
              <button
                className="bg-gradient-to-r from-[#F25749] to-[#5945A7] py-2 px-8 text-tWhite font-medium font-monse w-full mt-4"
                onClick={handleButtonClick}
              >
                {!showFullText ? "Leer más" : "Leer menos"}
              </button>
            </p>
          </div>
        </Transition>
      </div>
    </div>
  );
}
