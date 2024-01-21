import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapContainer from "../../components/googleMap/CustomMap";
import { Button } from "@mui/material";
import CustomCarousel from "../../components/styledComponents/carousel/CustomCarousel";
import db from "../../db/db";

const DetalleTerreno = () => {
  const { id } = useParams();
  const terreno = db.find((terreno) => terreno.nombre === id);

  const [switchContainer, setSwitchContainer] = useState(true);

  const handleSwitchContainer = () => {
    setSwitchContainer(!switchContainer);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-p4">
      <div className="w-full h-full flex flex-col md:flex-row my-12 md:my-0 md:p-12 bg-white md:m-12">
        <div className="w-full h-full flex flex-col gap-12 md:m-12">
          <div>
            <h1 className="font-afacad text-2xl md:text-5xl p-4">{terreno.nombre} {terreno.ubicacion}, {terreno.municipio}</h1>
          </div>
          <div className={`w-full h-full`}>
            <div className="text-center w-24 bg-p4">
              <Button onClick={handleSwitchContainer} className="cursor-pointer w-full">{!switchContainer ? 'Album' : 'Mapa'}</Button>
            </div>
            <MapContainer
              className={`${switchContainer ? 'hidden' : 'block'}`}
              lat={terreno.coordenadas[0]}
              lang={terreno.coordenadas[1]}
            />
            <CustomCarousel className={`${!switchContainer ? 'hidden' : 'block'}`} imagenes={terreno.imagenes}/>
          </div>
        </div>

        <div className="h-full w-[100%] flex flex-col justify-center gap-4 p-6 md:p-0 md:gap-8">
          <h1 className="text-2xl font-bold">Detalles del Terreno</h1>

          <span className="font-bold">Descripción:</span>
          <p>{terreno.descripcion}</p>

          <span className="font-bold">Servicios Básicos:</span>
          <p>{terreno.servicios.electricidad ? 'Cuenta con electricidad.' : 'No cuenta con servicios básicos en la actualidad, ideal para inversión a largo plazo y desarrollo personalizado.'}</p>

          <span className="font-bold">Amenidades:</span>
          <p>{terreno.amenidades}</p>

          <span className="font-bold">Costos:</span>
          <ul>
            <li>Tamaño: {terreno.metrosCuadrados}m²</li>
            {/* <li>Precio: ${terreno.precio} MXN por metro cuadrado</li> */}
            <li>Costo total: ${terreno.precio}</li>
            <li>Enganche del 30%: ${terreno.enganche}</li>
            <li>Facilidades de pago disponibles en 12, 24 y 36 meses sin intereses.</li>
            <li>Pago mensual por 36 meses: ${Math.round((terreno.precio - terreno.enganche) / 36)}</li>
          </ul>

          <span className="font-bold">Ubicación:</span>
          <a href={`https://www.google.com/maps?q=${terreno.coordenadas[0]},${terreno.coordenadas[1]}&z=17&hl=es`} target="_blank" className="text-blue-500">Ver en Google Maps</a>

          <p className="mt-4">¡Oportunidad de inversión en un terreno con gran potencial de crecimiento en {terreno.ubicacion}, {terreno.municipio}!</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleTerreno;
