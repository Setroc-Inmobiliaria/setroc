import React, { useEffect } from "react";
import "./LandingPage.css";
import SelectComponent from "../../components/styledComponents/select/SelectComponent";
import { Button, FormControl } from "@mui/material";
import CardsComponent from "../../components/pageComponents/CardsComponent/CardsComponent";
import db from "../../db/db";
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";

export const LandingPage = () => {
  useEffect(() => {
    localStorage.setItem("terrenos", JSON.stringify(db));
  }, []);

  return (
    <div className="flex flex-col w-full">
    <div className="flex flex-col md:flex-row h-full">
      <div className="bg-image w-full flex flex-col justify-center items-center">
        <div className=" h-full bg-white bg-opacity-20 w-full flex flex-col justify-center items-center gap-6 p-8">
          
          <div className="bg-white bg-opacity-80 w-full md:w-8/12 flex flex-col gap-5 bg-smoke p-8 rounded-lg drop-shadow-2xl">
            <SelectComponent
              items={[
                "San Andres, Cuauhtempan",
                "Tlayacapan, Morelos",
                'Lomas "El Potrero"',
                "Totoloapan, Morelos",
                "Ahuatlan, Morelos",
              ]}
              title="Localidad"
              name="terrenos"
              key={1}
            />
            <SelectComponent
              items={["Terreno", "Inmueble"]}
              title="Tipo de propiedad"
              name="terrenos"
              key={2}
            />
            <SelectComponent
              items={["Zacanco", "Piedra Rosa", "Salida"]}
              title="Encuentra tu terreno"
              name="terrenos"
              key={3}
            />

            <Button
              className=" transition-all ease-in-out hover:transition-all hover:ease-in-out hover:scale-110 "
              variant="contained"
            >
              Buscar
            </Button>
          </div>
          <h1 className="title text-center text-7xl md:text-9xl">
            El terreno a tu medida
          </h1>
        </div>
      </div>



      <div className="w-full flex flex-col p-5 md:p-12 gap-6">
      <h1 className="title text-4xl  md:text-3xl font-bold text-center md:text-start">
      ¡Vende tu Terreno o Encuentra tu Rincón Perfecto!
          </h1>
          <span className="title text-2xl ">
          ¿Listo para dar el siguiente paso? ¡Nosotros también! Completa este formulario rápido y nuestros expertos en terrenos se encargarán del resto. Ya sea que quieras vender tu espacio o descubrir tu nuevo oasis, ¡Estamos aquí para hacerlo realidad!
          </span>
        <FormControl className="w-full flex flex-col gap-5 font-afacad">
          <label>Nombre Completo</label>
          <TextFieldComponent label="Nombre Completo *" />
          <label>Email</label>
          <TextFieldComponent label="Email *" />
          <label>Numero de teléfono</label>
          <TextFieldComponent label="Número de teléfono *" />
          <label>Tu mensaje</label>
          <TextAreaComponent label="Tu mensaje" />
          <Button variant="contained" disableElevation className="w-full">
            Enviar
          </Button>
        </FormControl>
      </div>

    </div>
    <div className="relative">
      <div className="w-full -z-10 h-96 absolute bg-p4 pt-2 md:pt-8">
      <p className="font-afacad text-center text-4xl md:text-5xl p-4">Tu única tarea es soñar, nosotros lo hacemos realidad.</p>
<p className="font-afacad text-center text-4xl md:text-5xl p-4">¡Encuentra tu próximo hogar!</p>
      </div>
      <div className="z-50 p-2 md:p-16 mt-72 md:mt-40">
      <CardsComponent/>

      </div>

    </div>
    </div>
  );
};
