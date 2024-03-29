import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapContainer from "../../googleMap/CustomMap";
import { Button } from "@mui/material";
// import makeStyles from "@mui/material";
import CustomCarousel from "../../styledComponents/carousel/CustomCarousel";
import db from "../../../db/db";
import './Detalle.css'
import TextFieldComponent from "../../styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../styledComponents/textfield/TextareaComponent";
import SelectComponent from "../../styledComponents/select/SelectComponent";
import { currencyFormatter, goToTop } from "../../../utils/functions";
import Swal from "sweetalert2";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { fire_db } from "../../../firebase";


const DetalleTerreno = () => {


  const [switchContainer, setSwitchContainer] = useState(true);
  const [monthValue, setMonthValue] = useState(0)
  const [supValue, setSupValue] = useState(0)
  const [engancheFinal, setEngancheFinal] = useState(0)
  const [totalFinal, setTotalFinal] = useState(0)
  const [montFinal, setMonthFinal] = useState(0)

  const { id } = useParams();

  const terreno = db.find((terreno) => terreno.nombre === id);
  useEffect(() => {
    // Esta función se ejecutará cada vez que supValue o monthValue cambien
    console.log(terreno);
    const setFinalPrices = () => {

      if (supValue === 0) {
        setMonthFinal(0)
        goToTop()

      } else {
        const total = (terreno.costoPorMetroCuadrado * supValue)
        const totalEnganche = total * .30
        const totalMenosEnganche = total - totalEnganche

        const totalMensualidades = totalMenosEnganche / monthValue

        const totalWithoutFormat = Math.round(total)
        const totalFormat = currencyFormatter({
          currency: "MXN",
          value: totalWithoutFormat
        })
        setTotalFinal(totalFormat)


        const engancheNoFormater = Math.round(totalEnganche)
        const engancheWFormat = currencyFormatter({ currency: "MXN", value: engancheNoFormater })
        setEngancheFinal(engancheWFormat)


        const mensualidadesNoFormater = Math.round(totalMensualidades)
        const mensualidadesFormat = currencyFormatter({ currency: 'MXN', value: mensualidadesNoFormater })
        setMonthFinal(mensualidadesFormat)
      }

      // console.log(total, monthValue);
    }

    setFinalPrices();
  }, [supValue, monthValue, terreno.costoPorMetroCuadrado, totalFinal, terreno]);


  //Logica del Formulario de contacto

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const mensaje = `Quisiera recibir informacion de la propiedad ${terreno.nombre} ¡Gracias!`
  const [message, setMessage] = useState(mensaje)
  const formSpreeURL = 'https://formspree.io/f/mqkrlqjy'
  const contactosRef = collection(fire_db, 'contactos');

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.length || !email.length || !telefono.length || !message.length) {
      Swal.fire({
        icon: "error",
        title: "Campos invalidos",
        text: "Llena el formulario para poder continuar",
      });
    } else {
      const info = {
        name,
        email,
        telefono,
        message,
        timestamp: serverTimestamp(),
        active: true,
      }
      try {
        await axios.post(formSpreeURL, info);
        await addDoc(contactosRef, info)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Gracias por llenar el formulario",
          text: 'Uno de nuestros asesores se pondra en contacto contigo muy pronto.',
          showConfirmButton: false,
          timer: 1500
        });
        setName('')
        setEmail('')
        setTelefono('')
        setMessage('')
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    }

  }


  const handleSwitchContainer = () => {
    setSwitchContainer(!switchContainer);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-col relative">
      <div className="w-full h-96 pt-6 md:pt-12 image absolute">
        <div className="w-full">
          <p className="font-afacad text-center text-2xl md:text-5xl p-4">{terreno.nombre} {terreno.ubicacion}, {terreno.municipio}</p>
          {/* <div className="w-full md:w-[78%] flex flex-row justify-evenly items-center">
            <p>{terreno.metrosCuadrados}m²</p>
            <p>{terreno.metrosCuadrados}m²</p>

            </div> */}
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
                    backgroundColor: switchContainer ? 'none' : 'white',
                    '&:hover': {
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
                    backgroundColor: !switchContainer ? 'none' : 'white',
                    '&:hover': {
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


            <TextFieldComponent setData={setName} value={name} name="name" label="Nombre Completo *" placeholder="Nombre Completo" />

            <TextFieldComponent setData={setEmail} value={email} name="email" label="Email *" placeholder="Correo electronico" />

            <TextFieldComponent setData={setTelefono} value={telefono} name="telefono" label="Número de teléfono *" placeholder="Numero de contacto" />

            <TextAreaComponent setData={setMessage} placeholder="Tu mensaje" value={message} name="message" />
            <Button variant="contained" sx={{ padding: 1 }} className="w-full" onClick={handleSubmit}>
              Enviar
            </Button>

          </div>

          <div className="w-full md:p-12 p-2 bg-white rounded-md shadow-sm md:shadow-lg shadow-black">
            <div className="h-full w-[100%] flex flex-col justify-center gap-4 p-2 md:p-0 md:gap-8">
              {/* <h1 className="font-montserrat text-2xl font-bold text-p4">Detalles del Terreno</h1> */}

              {/* <span className="font-roboto font-medium italic">Descripción:</span> */}
              <p className="font-nunito font-normal">{terreno.descripcion}</p>

              <span className="font-roboto font-medium italic text-p4">Servicios Básicos:</span>
              <p className="font-nunito">{terreno.servicios.electricidad ? 'Cuenta con electricidad.' : 'No cuenta con servicios básicos en la actualidad, ideal para inversión a largo plazo y desarrollo personalizado.'}</p>

              <span className="font-roboto font-medium italic text-p4">Amenidades:</span>
              <p className="font-nunito">{terreno.amenidades}</p>

              <span className="font-roboto font-medium italic text-p4">Costos:</span>
              <ul className="flex flex-col gap-4 font-nunito">
                <li>Un terreno de{<SelectComponent setSelected={setSupValue} selected={supValue} title="Selecciona el tamano de superficie" items={terreno.metrosCuadrados} />}  metros cuadrados</li>
                <li>A{<SelectComponent setSelected={setMonthValue} selected={monthValue} title="Mensualidades" items={terreno.mensualidades} />} Mensualidades sin intereses</li>
                {/* <li>Precio: ${terreno.precio} MXN por metro cuadrado</li> */}
                <li>Costo total: ${totalFinal}</li>
                <li>Pagos mensuales: ${montFinal}</li>
                <li>Enganche del 30%: ${engancheFinal}</li>
                <li>Facilidades de pago disponibles en 12, 24 y 36 meses sin intereses.</li>
              </ul>
              <span className="font-roboto font-medium italic text-p4">Ubicación:</span>
              <a href={`https://www.google.com/maps?q=${terreno.coordenadas[0]},${terreno.coordenadas[1]}&z=17&hl=es`} target="_blank" rel="noreferrer" className="text-blue-500">Ver en Google Maps</a>

              <p className="mt-4 font-nunito">¡Oportunidad de inversión en un terreno con gran potencial de crecimiento en {terreno.ubicacion}, {terreno.municipio}!</p>

              <span className="font-nunito text-p2">Precios sujetos a disponibilidad*</span>

            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default DetalleTerreno;
