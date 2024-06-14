import "./LandingPage.css";
import { Button, Checkbox, Slider } from "@mui/material";
import CardsComponent from "../../components/pageComponents/CardsComponent/CardsComponent";
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";
import { useEffect, useState } from "react";
import CardComponent from "../../components/pageComponents/CardComponent/CardComponent";
import db from "../../db/db";
import { currencyFormatter } from "../../utils/functions";
import Swal from "sweetalert2";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { fire_db } from "../../firebase";
import axios from "axios";


export const LandingPage = ({ dbFirebase }) => {
  const [sliderValue, setSliderValue] = useState(90000);
  const terrenos = dbFirebase ? dbFirebase : db;
  const [terreno, setTerreno] = useState('');
  const [formatEngancheCalculated, setFormatEngancheCalculated] = useState(0);
 

  // Formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [message, setMessage] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false)
  const formSpreeURL = import.meta.env.VITE_FORMSPREE_API_KEY
  const contactosRef = collection(fire_db, 'contactos');

  const verifyEmailFormat = (correo) => {
    const patron = /^[\w.-]+@[a-zA-Z\d\\.-]+\.[a-zA-Z]{2,}$/;
    return patron.test(correo);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.length || !email.length || !verifyEmailFormat(email) || !telefono.length || telefono.length < 8 || isNaN(telefono) || !message.length) {
      Swal.fire({
        icon: "error",
        title: "Campos inválidos",
        text: "Llena bien el formulario para poder continuar",
      });
    } else if(!acceptTerms) { 
      Swal.fire({
        icon: "error",
        title: 'Acepta los terminos y condiciones'
      })
    } else {
      const info = {
        name,
        email,
        telefono,
        message,
        timestamp: serverTimestamp(),
        active: true,
      };
      try {
        await axios.post(formSpreeURL, info);
        const newContact = await addDoc(contactosRef, info);
        await newContact.update;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Gracias por llenar el formulario",
          text: 'Uno de nuestros asesores se pondrá en contacto contigo muy pronto.',
          showConfirmButton: false,
          timer: 1500
        });
        setName('');
        setEmail('');
        setTelefono('');
        setMessage('');
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    }
  };

  const searchTerreno = (e) => {
    setSliderValue(e.value)
    const terrenoFiltrado = terrenos.find((item) => {
      const percent = item.precio
      const formatSliderValue = currencyFormatter({
        currency: 'MXN',
        value: e.value
      });
      setFormatEngancheCalculated(formatSliderValue);
      return sliderValue <  percent
    })
    console.log(terrenoFiltrado);
    setTerreno(terrenoFiltrado)
  };

  useEffect(() => {
    const formatSliderValue = currencyFormatter({
      currency: 'MXN',
      value: sliderValue
    });
    setFormatEngancheCalculated(formatSliderValue)
    const terrenoFiltrado = terrenos.find((item) => {
      const percent = item.precio
      return sliderValue <  percent
    })
    setTerreno(terrenoFiltrado)
  }, [sliderValue, terrenos]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row">
        <img src="https://imgur.com/gallery/07KYxPy" alt="" />
        <div className="bg-image w-full flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-20 w-full flex flex-col justify-center items-center gap-6 p-2">
            <div className="bg-white bg-opacity-80 h-full w-full md:w-full flex flex-col gap-5 bg-smoke p-4 md:p-24 rounded-lg drop-shadow-2xl">
              <h1 className="title  font-roboto text-5xl md:text-5xl text-p3 font-medium">
                <span className="font-extrabold text-7xl">E</span>L lugar de tus sueños
              </h1>
              <h1 className="text-end font-nunito text-3xl md:text-5xl text-p2"><span className="text-6xl font-bold">C</span>ada presupuesto tiene su terreno ideal</h1>
              <div className="w-full flex flex-col justify-center items-center md:p-12 ">
                <h1 className="md:text-2xl text-2xl text-center py-5 text-p4"><span className="text-5xl">S</span>elecciona el rango del presupuesto destinado para el enganche</h1>
                <h1 className="md:text-2xl text-lg text-center py-5 text-p3"><span className="text-5xl">C</span>on un enganche de {formatEngancheCalculated} te recomendamos:</h1>
                <div className="w-full flex flex-col gap-12">
                  <Slider
                    spacing={2}
                    step={10000}
                    marks
                    min={50000}
                    max={140000}
                    value={sliderValue}
                    onChange={(e) => searchTerreno(e.target)}
                    sx={{
                      color: '#42838A', // Color del slider
                      '& .MuiSlider-thumb': {
                        backgroundColor: '#42838A', // Color de la bolita del slider
                      },
                    }}
                  />
                  {terreno && (
                    <CardComponent
                      nombre={terreno.nombre}
                      costoPorMetroCuadrado={terreno.costoPorMetroCuadrado}
                      imagenes={terreno.imagenes}
                      metrosCuadrados={terreno.metrosCuadrados}
                      municipio={terreno.municipio}
                      ubicacion={terreno.ubicacion}
                      key={terreno.id}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center p-5 md:p-20 gap-6 panel1">
          <h1 className="title text-3xl font-bold md:text-5xl font-nunito text-end md:text-center text-p2">
            <span className="text-5xl md:text-7xl text-p3">¡</span>Vende tu Terreno o Encuentra tu Rincón <span className="font-extrabold text-p3">Perfecto</span><span className="text-5xl md:text-7xl text-p3">!</span>
          </h1>
          <span className="title text-xl font-open text-p2">
            ¿Listo para dar el siguiente paso? ¡Nosotros también!
            Completa este formulario y nuestros asesores se encargarán del resto. Ya sea que quieras vender tu espacio o descubrir una nueva inversion, ¡Estamos aquí para hacerlo realidad!
          </span>
          <label>Nombre Completo</label>
          <TextFieldComponent setData={setName} value={name} name="name" label="Nombre Completo *" />
          <label>Email</label>
          <TextFieldComponent setData={setEmail} value={email} name="email" label="Email *" />
          <label>Numero de teléfono</label>
          <TextFieldComponent setData={setTelefono} value={telefono} name="telefono" label="Número de teléfono *" />
          <label>Tu mensaje</label>
          <TextAreaComponent setData={setMessage} value={message} name="message" label="Tu mensaje" />
          <div className="w-full flex flex-col justify-center items-center">
          <label className="text-sm text-center font-nunito font-extrabold">Al enviar este formulario, aceptas los términos y condiciones, así como la política de privacidad.
          </label>
          <Checkbox checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)}></Checkbox>
          </div>
          <Button onClick={handleSubmit} variant="contained" disableElevation className="w-full">
            Enviar
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="w-full -z-10 h-96 absolute panel2 pt-2 md:pt-8">
          <p className="font-afacad text-center text-4xl md:text-5xl p-4">Tu única tarea es soñar, nosotros lo hacemos realidad.</p>
          <p className="font-afacad text-center text-4xl md:text-5xl p-4">¡Encuentra tu próximo hogar!</p>
        </div>
        <div className="z-50 p-2 md:p-16 mt-72 md:mt-40 ">
          <CardsComponent dbFirebase={dbFirebase} />
        </div>
      </div>
    </div>
  );
};
