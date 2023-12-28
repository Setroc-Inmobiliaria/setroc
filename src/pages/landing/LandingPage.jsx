import React from "react";
import cobague from "../../assets/cobague.png";
import konstr from "../../assets/konstructor.png";
import setroc from "../../assets/SETROC.png";
import "./LandingPage.css";
import SelectComponent from "../../components/styledComponents/select/SelectComponent";
import { Button } from "@mui/material";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const LandingPage = () => {
  return (
    <div className="bg-image h-auto w-full flex flex-col justify-center items-center">
      <div className=" bg-orange-200 h-full w-full bg-opacity-30 flex flex-col justify-center items-center gap-6 p-10">
        <div className="grid grid-cols-2 md:flex flex-row md:justify-evenly place-items-center gap-12 items-center w-full ">
          <img src={konstr} alt="cobague" className="grupo1" />
          <img src={cobague} alt="cobague" className="grupo1" />
          <img src={setroc} alt="cobague" className="grupo2" />
        </div>
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
      <div>
        <FloatingWhatsApp
          phoneNumber="525577137642"
          accountName="SETROC Inmobiliaria"
          avatar={setroc}
          allowClickAway={true}
          chatMessage="¡Hola! ¿En qué puedo ayudarte?"
          notification={true}
          statusMessage="Online"
          // darkMode={true}
        />
      </div>
    </div>
  );
};
