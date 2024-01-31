import "./LandingPage.css";
import SelectComponent from "../../components/styledComponents/select/SelectComponent";
import { Button, FormControl, Slider } from "@mui/material";
import CardsComponent from "../../components/pageComponents/CardsComponent/CardsComponent";
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";
import { useEffect, useState } from "react";
import CardComponent from "../../components/pageComponents/CardComponent/CardComponent";
import db from "../../db/db";

export const LandingPage = () => {

  const [mensajeContacto, setMensajeContacto] = useState("")
  const [sliderValue, setSliderValue] = useState(10000)
  const terrenos = db
  const [terreno, setTerreno] = useState(terrenos[0])

  useEffect(() => console.log(sliderValue), [sliderValue])

  const searchTerreno = (e) => {
    const value = e.target.value
    setSliderValue(value)
    const terrenoFiltrado = terrenos.filter(terreno => {
      const precioTotal = (terreno.metrosCuadrados[0] * terreno.costoPorMetroCuadrado)
      const enganche = precioTotal * 0.3

      return Math.abs(enganche) >= sliderValue
    })
    setTerreno(terrenoFiltrado[0])
    console.log(sliderValue);
  }

  useEffect(() => {
    searchTerreno({ target: { value: sliderValue } }); // Llamar a la función searchTerreno con el valor actual de sliderValue
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row h-full">
        <img src="https://imgur.com/gallery/07KYxPy" alt="" />
        <div className="bg-image w-full flex flex-col justify-center items-center">
          <div className=" h-full bg-white bg-opacity-20 w-full flex flex-col justify-center items-center gap-6 p-8">

            <div className="bg-white bg-opacity-80 h-full w-full md:w-12/12 flex flex-col gap-5 bg-smoke p-8 rounded-lg drop-shadow-2xl">
        <h1>Tenemos terrenos que se adecuan a las posibilidades de tu enganche!</h1>

        <h1>Enganche de: {sliderValue}</h1>
              <Slider spacing={2} step={10000}
                marks
                min={50000}
                max={140000}
                valueLabelDisplay="auto"
                value={sliderValue}
                onChange={(e) => searchTerreno(e)}
              />

              <CardComponent 
              nombre={terreno.nombre} 
              costoPorMetroCuadrado={terreno.costoPorMetroCuadrado} 
              imagenes={terreno.imagenes} 
              metrosCuadrados={terreno.metrosCuadrados} 
              municipio={terreno.municipio} 
              ubicacion={terreno.ubicacion} 
              />


            </div>
            <h1 className="title text-center font-montserrat font-bold text-7xl md:text-7xl">
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

          <label>Nombre Completo</label>
          <TextFieldComponent label="Nombre Completo *" />
          <label>Email</label>
          <TextFieldComponent label="Email *" />
          <label>Numero de teléfono</label>
          <TextFieldComponent label="Número de teléfono *" />
          <label>Tu mensaje</label>
          <TextAreaComponent label="Tu mensaje" setValue={setMensajeContacto} value={mensajeContacto} />
          <Button variant="contained" disableElevation className="w-full">
            Enviar
          </Button>

        </div>

      </div>
      <div className="relative">
        <div className="w-full -z-10 h-96 absolute bg-p4 pt-2 md:pt-8">
          <p className="font-afacad text-center text-4xl md:text-5xl p-4">Tu única tarea es soñar, nosotros lo hacemos realidad.</p>
          <p className="font-afacad text-center text-4xl md:text-5xl p-4">¡Encuentra tu próximo hogar!</p>
        </div>
        <div className="z-50 p-2 md:p-16 mt-72 md:mt-40">
          <CardsComponent />

        </div>

      </div>
    </div>
  );
};
