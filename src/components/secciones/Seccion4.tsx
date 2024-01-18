import Input from "@/src/ui/Input";
import TextArea from "@/src/ui/TextArea";
import React, { useEffect, useState } from "react";
import { Transition } from "../transition/Transition";
import axios from "axios";
import { Error } from "../error/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Seccion4() {
  // type:"FOS"
  const [formState, setFormState]: any = useState({});
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState("");
  const notify = () => toast("Wow so easy!");
  const handleChangeInput = (e: any) => {
    let value = e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const save = async () => {
    if (!formState.name) {
      setError("El nombre es un campo requerido");
      return;
    }
    let regexTexto = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s',.-]+$/;
    if (!regexTexto.test(formState.name)) {
      setError("El nombre no es valido");
      return;
    }
    if (!formState.email) {
      setError("El correo electónico es un campo requerido");
      return;
    }
    let regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(formState.email)) {
      setError("El correo electrónico no es valido");
      return;
    }
    if (!formState.phone) {
      setError("El celular es un campo requerido");
      return;
    }
    let regexPhone = /^[3-9]\d{0,15}$|^10$|^1[0-5]\d{0,8}$/g;
    if (!regexPhone.test(formState.phone)) {
      setError("El celular no es valido");
      return;
    }
    if (!formState.condominium) {
      setError("El rubro es un campo requerido");
      return;
    }
    if (!formState.message) {
      setError("Nesecitamos que cuente su proyecto o necesidad");
      return;
    }
    setLoading(!loading);
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.post["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept";
    axios.defaults.headers.post["Access-Control-Allow-Methods"] =
      "GET, POST, PUT, DELETE, OPTIONS";
    axios.defaults.headers.post["Access-Control-Allow-Credentials"] = "true";
    axios.defaults.headers.post["Access-Control-Max-Age"] = "86400";
    axios.defaults.headers.post["Access-Control-Expose-Headers"] =
      "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type";
    axios
      .post(`${apiUrl}/webpage`, { ...formState, type: "FOS" })
      .then((response) => {
        setLoading(false);
        setFormState({});

        toast.success("¡Mensaje enviado con éxito! 🚀", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        toast.error("Ocurrio un error", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const dismissError = () => {
    setError("");
  };

  useEffect(() => {
    if (error) {
      const timeoutId = setTimeout(dismissError, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  return (
    <div className="relative fullScreen" id="contactanos">
      <ToastContainer />
      <div className="mx-[3%] absolute left-0 right-0 top-0 bottom-0 desktop:mx-[26%] flex justify-center items-center">
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
          {error && <Error>{error}</Error>}
          <div className={`${error ? "mt-0" : "mt-4"}`}>
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
              placeholder="Celular"
              value={formState["phone"]}
              onChange={handleChangeInput}
            />
            <Input
              name="condominium"
              type="text"
              placeholder="Rubro de tu empresa"
              value={formState["condominium"]}
              onChange={handleChangeInput}
            />
            <TextArea
              name="message"
              type="text"
              placeholder="Cuéntanos de tu proyecto o necesidad"
              value={formState["message"]}
              onChange={handleChangeInput}
            />
            <button
              onClick={() => save()}
              disabled={loading}
              className={`w-full py-2 ${
                loading
                  ? "bg-tGrey"
                  : "bg-gradient-to-r from-custom-orange to-custom-purple"
              } desktopK:py-4 desktopK:text-xl text-tWhite text-base font-semibold font-monse`}
            >
              Enviar mensaje
            </button>
          </div>
        </Transition>
      </div>
    </div>
  );
}
