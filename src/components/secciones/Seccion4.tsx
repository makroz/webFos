import Input from "@/src/ui/Input";
import TextArea from "@/src/ui/TextArea";
import React, { useState } from "react";
import { Transition } from "../transition/Transition";

export default function Seccion4() {
  const [formState, setFormState]: any = useState({});
  const handleChangeInput = (e: any) => {
    let value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <div className="relative fullScreen" id="contactanos">
      <div className="mx-[3%] pt-6 desktop:mx-[26%] ">
        <Transition>
          <h1 className="text-center my-5 text-tWhite text-4xl font-bold font-monse">
            Contáctanos
          </h1>
          <p className="text-tWhite text-base text-center font-monse">
            Explicaremos cómo podemos ayudar a tu comunidad, la forma en que
            logramos mejorar la transparencia en el trabajo de la administración
            y reducir los gastos comunes a través de nuestro sistema para
            administrar edificios y condominios.
          </p>
          <div className="mt-8">
            <Input
              name="name"
              type="text"
              placeholder="Nombre completo"
              value={formState["name"]}
              onChange={handleChangeInput}
            />
            <Input
              name="email"
              type="text"
              placeholder="Correo electrónico"
              value={formState["email"]}
              onChange={handleChangeInput}
            />
            <Input
              name="phone"
              type="number"
              placeholder="Teléfono"
              value={formState["phone"]}
              onChange={handleChangeInput}
            />
            <Input
              name="rubro"
              type="text"
              placeholder="Rubro de tu empresa"
              value={formState["rubro"]}
              onChange={handleChangeInput}
            />
            <TextArea
              name="descrip"
              type="text"
              placeholder="Cuéntanos de tu proyecto o necesidad"
              value={formState["descrip"]}
              onChange={handleChangeInput}
            />
            <button className="bg-gradient-to-r from-custom-orange to-custom-purple w-full py-2 text-tWhite text-base font-semibold font-monse">
              Enviar mensaje
            </button>
          </div>
        </Transition>
      </div>
    </div>
  );
}
