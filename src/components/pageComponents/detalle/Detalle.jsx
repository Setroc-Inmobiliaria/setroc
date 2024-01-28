import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MapContainer from "../../googleMap/CustomMap";
import { Button } from "@mui/material";
// import makeStyles from "@mui/material";
import CustomCarousel from "../../styledComponents/carousel/CustomCarousel";
import db from "../../../db/db";
import './Detalle.css'
import TextFieldComponent from "../../styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../styledComponents/textfield/TextareaComponent";
import {FormControl} from '@mui/material'
import SelectComponent from "../../styledComponents/select/SelectComponent";


const DetalleTerreno = () => {
  const { id } = useParams();
  const terreno = db.find((terreno) => terreno.nombre === id);

  const [switchContainer, setSwitchContainer] = useState(true);
  const [monthValue, setMonthValue] = useState(0)
  const [supValue, setSupValue] = useState(0)
  const [engancheFinal, setEngancheFinal] = useState(0)
  const [totalFinal, setTotalFinal] = useState(0)
  const [montFinal, setMonthFinal] = useState(0)

  const setFinalPrices = () => {
    const total = (terreno.costoPorMetroCuadrado * supValue)
    const totalEnganche = total * .30
    const totalMensualidades = (total / monthValue)
    setTotalFinal(total)
    setEngancheFinal(totalEnganche)
    setMonthFinal(totalMensualidades)
    console.log(total, monthValue);
  }



  const mensaje = "Me interesa mucho esta propiedad y quiero recibir más información. ¡Gracias!"



  const handleSwitchContainer = () => {
    setSwitchContainer(!switchContainer);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-col relative">
      <div className="w-full h-96 pt-6 md:pt-12 image absolute">
        <div className="w-full">
            <p className="font-afacad text-center text-2xl md:text-5xl p-4">{terreno.nombre} {terreno.ubicacion}, {terreno.municipio}</p>
            <div className="w-full md:w-[78%] flex flex-row justify-evenly items-center">
            <p>{terreno.metrosCuadrados}m²</p>
            <p>{terreno.metrosCuadrados}m²</p>

            </div>
          </div>
      </div>
      <div className="p-2 relative pt-48">
        <div className="w-full h-full flex flex-col md:flex-row gap-12 md:gap-0 md:p-12 ">
        <div className="w-full h-full flex flex-col gap-12 md:m-12">
          
          <div className={`w-full h-full`}>
            <div className="text-center w-[50%] flex justify-center items-center ">
              <Button
                onClick={handleSwitchContainer}
                className={`cursor-pointer w-full ${switchContainer
                    ? 'font-bold shadow-0 transform scale-100 focus:outline-none border-2border-black focus:shadow-outline-blue transition-all active:scale-100'
                    : 'font-bold shadow-black shadow-inner  transition-all transform scale-105 focus:outline-none focus:shadow-outline-white active:scale-100'
                  }`}
                  sx={{
                    backgroundColor: switchContainer ? 'none' :  'white',
                    '&:hover' : {
                      backgroundColor: 'white',
                    borderRadius: 1

                    },
                    borderRadius: 1

                  }}
              >
                Mapa
              </Button>

              <Button

                onClick={handleSwitchContainer}
                className={`cursor-pointer w-full ${!switchContainer
                    ? 'font-bold  shadow-0 transition-all transform scale-100 focus:outline-none focus:shadow-outline-white active:scale-100'
                    : 'font-bold  transition-all transform scale-105 focus:outline-none focus:shadow-outline-blue active:scale-100 shadow-black shadow-inner'
                  }`}
                  sx={{
                    backgroundColor: !switchContainer ? 'none' :  'white',
                    '&:hover' : {
                      backgroundColor: 'white',
                    borderRadius: 1

                    },
                    borderRadius: 1

                  }}
              >
                Galeria
              </Button>

            </div>
            <div>
                 <MapContainer
              className={`${switchContainer ? 'hidden p-2' : 'block p-2'}`}
              lat={terreno.coordenadas[0]}
              lang={terreno.coordenadas[1]}
            />


            </div>
         
            <CustomCarousel className={`${!switchContainer ? 'hidden' : 'block p-1'}`} imagenes={terreno.imagenes} />
          </div>
       
         
          <TextFieldComponent placeholder="Nombre Completo *" />
        
          <TextFieldComponent placeholder="Email *" />
          
          <TextFieldComponent placeholder="Número de teléfono *" />
          
          <TextAreaComponent placeholder="Tu mensaje" value={mensaje}/>
          <Button variant="contained" disableElevation sx={{padding: 1}} className="w-full">
            Enviar
          </Button>
        
        </div>
        
                  <div className="w-full md:p-12 p-2 bg-white rounded-md shadow-sm md:shadow-lg shadow-black">
        <div className="h-full w-[100%] flex flex-col justify-center gap-4 p-2 md:p-0 md:gap-8">
          <h1 className="font-montserrat text-2xl font-bold">Detalles del Terreno</h1>

          {/* <span className="font-roboto font-medium italic">Descripción:</span> */}
          <p className="font-nunito font-normal">{terreno.descripcion}</p>

          <span className="font-robot font-medium italic">Servicios Básicos:</span>
          <p>{terreno.servicios.electricidad ? 'Cuenta con electricidad.' : 'No cuenta con servicios básicos en la actualidad, ideal para inversión a largo plazo y desarrollo personalizado.'}</p>

          <span className="font-bold">Amenidades:</span>
          <p>{terreno.amenidades}</p>

          <span className="font-bold">Costos:</span>
          <ul className="flex flex-col gap-4">
            <li>{<SelectComponent setSelected={setSupValue} selected={supValue} title="Selecciona el tamano de superficie" items={terreno.metrosCuadrados} />}</li>
            <li>{<SelectComponent op={setFinalPrices} setSelected={setMonthValue} selected={monthValue} title="Mensualidades" items={terreno.mensualidades}/>}</li>
            {/* <li>Precio: ${terreno.precio} MXN por metro cuadrado</li> */}
            <li>Costo total: ${totalFinal}</li>
            <li>Pagos mensuales: ${montFinal}</li>
            <li>Enganche del 30%: ${engancheFinal}</li>
            <li>Facilidades de pago disponibles en 12, 24 y 36 meses sin intereses.</li>
          </ul>
          <span className="font-bold">Ubicación:</span>
          <a href={`https://www.google.com/maps?q=${terreno.coordenadas[0]},${terreno.coordenadas[1]}&z=17&hl=es`} target="_blank" className="text-blue-500">Ver en Google Maps</a>

          <p className="mt-4">¡Oportunidad de inversión en un terreno con gran potencial de crecimiento en {terreno.ubicacion}, {terreno.municipio}!</p>

          <span>Precios sujetos a disponibilidad*</span>

        </div>
        </div>
      </div>
      </div>

      

    </div>
  );
};

export default DetalleTerreno;
