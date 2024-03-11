import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import { Button } from "@mui/material";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";
// import getFirebase from "../../firebase";
import './Contacto.css'
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ContactoPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [message, setMessage] = useState('')

  const formSpreeURL = 'https://formspree.io/f/mqkrlqjy'


  const handleSubmit = async (e) => {
    e.preventDefault()
    const info = {
      name,
      email,
      telefono,
      message
    }
    try {
      await axios.post(formSpreeURL, info);
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

  return (
    <div className="w-full flex h-full flex-col">
      <div className="opacity-75 w-full">
        <div className="h-80 w-full panel3"></div>
      </div>

      <div className="flex justify-center items-center h-full bg-p3 p-4">
        <div className="flex flex-col justify-center panel4 p-6 md:p-12 gap-8 relative bottom-52">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <h1 className="font-afacad text-5xl">Contactanos</h1>
            <h1 className="font-afacad text-xl">
              Uno de nuestros asesores se pondra en contacto contigo muy pronto
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center gap-8 font-afacad">
            <label>Nombre Completo</label>
            <TextFieldComponent setData={setName} value={name} name="name" label="Nombre Completo *" />
            <label>Email</label>
            <TextFieldComponent setData={setEmail} value={email} name="email" label="Email *" />
            <label>Numero de teléfono</label>
            <TextFieldComponent setData={setTelefono} value={telefono} name="telefono" label="Número de teléfono *" />
            <label>Tu mensaje</label>
            <TextAreaComponent setData={setMessage} value={message} name="message" label="Tu mensaje" />
            <Button onClick={handleSubmit} variant="contained" disableElevation className="w-full">
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
