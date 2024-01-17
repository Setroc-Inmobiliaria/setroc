import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MapContainer from "../../components/googleMap/CustomMap";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Button } from "@mui/material";

const DetalleTerreno = () => {
  const { id } = useParams();
  const idFormat = id;
  const storage = localStorage.getItem("terrenos");
  const storageParse = JSON.parse(storage);
  const terreno = storageParse.find((terreno) => terreno.nombre === idFormat);

  const [switchContainer, setSwitchContainer] = useState(true);

  function currencyFormatter({ currency, value }) {
    const formatter = new Intl.NumberFormat("es-EU", {
      style: "currency",
      minimumFractionDigits: 0,
      currency,
    });

    const rounded = Math.round(value);
    return formatter.format(rounded);
  }

const formatPrice = currencyFormatter({
  currency: "MXN",
  value:terreno.precio,
});

const formatEnganche = currencyFormatter({
  currency: "MXN",
  value: terreno.enganche,
});

const mensualidades = (terreno.precio - terreno.enganche) / terreno.meses
const formatMens = Math.round(mensualidades)
const url = terreno.nombre.replace(' ', "-")


  const handleSwitchContainer = () => {
    setSwitchContainer(!switchContainer);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-center bg-p1 md:p-20">
        <div className="flex w-full justify-center">
            <ul>
                <li>Precio de venta: {formatPrice}</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
      <div className="bg-p2 w-full flex flex-col justify-center items-center p-2 md:p-12">
        <div className="w-full flex pl-4">
            <Button
          style={{
            backgroundColor: "#67ADD4", 
            color: "white",
            padding: "10px 15px", 
          }}
          onClick={handleSwitchContainer}
        >
          {switchContainer ? "Mirar el mapa" : "Ver Fotografias"}
        </Button>
        </div>
        
        <div
          className={
            !switchContainer
              ? `block transition-all delay-100`
              : "hidden transition-all "
          }
        >
          <MapContainer location={[18.9964, -98.932971]} />
        </div>
        <div
          className={
            switchContainer
              ? `block w-full transition-all delay-100`
              : "hidden transition-all "
          }
        >
          <CarouselProvider
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            totalSlides={terreno.imagenes.length}
            infinite={true}
            className="w-full"
            // hasMasterSpinner={true}
          >
            <Slider className="w-full">
              {terreno.imagenes.map((img, index) => {
                return (
                  <Slide index={img[index]}>
                    <img
                      className="h-full w-full object-cover object-botom"
                      src={img}
                      alt="terreno"
                    />
                  </Slide>
                );
              })}
            </Slider>
            <div className="flex flex-col items-center justify-between gap-8">
              <div className="w-full flex justify-between">
                <ButtonBack>
                  <MdNavigateBefore size={25} color="#1565C0" />
                </ButtonBack>
                <ButtonNext>
                  <MdNavigateNext size={25} color="#1565C0" />
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        
        <div className="w-full">
                <h1>{terreno.nombre}</h1>
                <h1>{terreno.ubicacion}</h1>
                <h1>{terreno.municipio}</h1>
              </div>
      </div>
    </div>
  );
};

export default DetalleTerreno;
