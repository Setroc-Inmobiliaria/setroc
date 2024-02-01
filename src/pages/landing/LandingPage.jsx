import "./LandingPage.css";
import SelectComponent from "../../components/styledComponents/select/SelectComponent";
import { Button, FormControl, Slider } from "@mui/material";
import CardsComponent from "../../components/pageComponents/CardsComponent/CardsComponent";
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";
import { useEffect, useState } from "react";
import CardComponent from "../../components/pageComponents/CardComponent/CardComponent";
import db from "../../db/db";
import { currencyFormatter } from "../../utils/functions";

export const LandingPage = () => {

  const [mensajeContacto, setMensajeContacto] = useState("")
  const [sliderValue, setSliderValue] = useState(90000)
  const terrenos = db
  const [terreno, setTerreno] = useState(terrenos[0])
  const [formatEngancheCalculated, setFormatEngancheCalculated] = useState(0)

  useEffect(() => console.log(sliderValue), [sliderValue])

  const searchTerreno = (e) => {
    const value = e.target.value
    setSliderValue(value)
    const terrenoFiltrado = terrenos.filter(terreno => {
      const precioTotal = (terreno.metrosCuadrados[0] * terreno.costoPorMetroCuadrado)
      const enganche = precioTotal * 0.3

      const value = sliderValue
      const formatSliderValue = currencyFormatter({
        currency: 'MXN',
        value : value
      })
      setFormatEngancheCalculated(formatSliderValue)
      switch (sliderValue) {
        case 50000:
          setTerreno(terrenos[0])
          break;
        case 60000:
          setTerreno(terrenos[2])
          break;
        
          case 70000:
            setTerreno(terrenos[3])
            break;
          
          case 90000:
            setTerreno(terrenos[1])
            break;

            case 140000:
              setTerreno(terrenos[4]); 
              break;
             
      
        default:  setTerreno(terrenos[1])
          break;
      }
    })
    
    console.log(sliderValue);
  }

  useEffect(() => {
    searchTerreno({ target: { value: sliderValue } }); // Llamar a la función searchTerreno con el valor actual de sliderValue
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row">
        <img src="https://imgur.com/gallery/07KYxPy" alt="" />
        <div className="bg-image w-full flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-20 w-full flex flex-col justify-center items-center gap-6 p-2">

            <div className="bg-white bg-opacity-80 h-full w-full md:w-full flex flex-col gap-5 bg-smoke p-4 md:p-24 rounded-lg drop-shadow-2xl">
            <h1 className="title  font-roboto text-5xl md:text-7xl text-p3 font-medium">
              <span className="font-extrabold text-9xl">E</span>L terreno a tu medida
            </h1>
        <h1 className="text-end font-nunito text-3xl md:text-7xl text-p2"><span className="text-8xl">T</span>enemos un terreno que se ajusta a tu presupuesto</h1>

        <div className="w-full flex flex-col justify-center items-center md:p-12 ">
        <h1 className="md:text-2xl text-2xl text-center py-5 text-p4"><span className="text-5xl">S</span>elecciona el rango del presupuesto destinado para el enganche</h1>
        <h1 className="md:text-2xl text-lg text-center py-5 text-p3"><span className="text-5xl">C</span>on un enganche de {formatEngancheCalculated} te recomendamos:</h1>

    <div className="w-full flex flex-col gap-12">
       <Slider spacing={2} step={10000}
                marks
                min={50000}
                max={140000}
                valueLabelDisplay="auto"
                value={sliderValue}
                onChange={(e) => searchTerreno(e)}
                // sx={{'width' : 350}}
                sx={{
                  color: '#42838A', // Color del slider
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#42838A', // Color de la bolita del slider
                  },
                }}
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

           
        </div>
            

            </div>
            
          </div>
        </div>



        <div className="w-full flex flex-col justify-center p-5 md:p-12 gap-6">
          <h1 className="title text-4xl font-bold md:text-7xl font-nunito text-end md:text-center text-p2">
            <span className="text-7xl md:text-9xl text-p3">¡</span>Vende tu Terreno o Encuentra tu Rincón <span className="font-extrabold text-p3">Perfecto</span><span className="text-7xl md:text-9xl text-p3">!</span>
          </h1>
          <span className="title text-2xl font-open text-p2">
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
