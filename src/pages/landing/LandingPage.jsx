import React, { useEffect } from "react";

import setroc from "../../assets/SETROC.png";
import banner1 from "../../assets/varios/banner1.jpg";
import "./LandingPage.css";
import SelectComponent from "../../components/styledComponents/select/SelectComponent";
import { Button } from "@mui/material";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CardsComponent from "../../components/pageComponents/CardsComponent/CardsComponent";
import { Link } from "react-router-dom";
import db from "../../db/db";

export const LandingPage = () => {

  useEffect(() => {
    localStorage.setItem('terrenos', JSON.stringify(db))
}, [])


  return (
    <div className="flex flex-col">
      <div className="bg-image h-screen w-full flex flex-col justify-center items-center">
        <div className="bg-orange-200 h-full w-full bg-opacity-30 flex flex-col justify-center items-center gap-6 p-10">
          <h1 className="title text-7xl text-center md:text-9xl">
            El terreno a tu medida
          </h1>
          <div className="bg-white w-full md:w-8/12 flex flex-col md:flex-row gap-5 bg-smoke p-4 rounded-lg drop-shadow-2xl">
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
              className="md:w-3/12 transition-all ease-in-out hover:transition-all hover:ease-in-out hover:scale-110 "
              variant="contained"
            >
              Buscar
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-p7 shadow-black shadow-xl">
        <div className=" w-[90%] h-96 shadow-2xl shadow-black sm:w-[80%] md:w-[60%] relative top-20 bg-p6 flex flex-col gap-6 items-center font-afacad text-2xl sm:text-4xl text-center p-2 md:p-12">
          <h1>Empieza a construir tu patrimonio.</h1>
          <h1>Nosotros nos encargamos de hacerlo realidad</h1>
          <h2>Conoce nuestros complejos en desarrollo</h2>
        </div>
      </div>

   
        <div className="w-full flex-col flex gap-12 items-center relative bottom-40 z-10 p-4 md:px-40 pt-32">
          <CardsComponent />

          <Link to="/propiedades"><Button>Conocer mas...</Button></Link>
        </div>
    </div>
  );
};
