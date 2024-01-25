import React from "react";
import TextFieldComponent from "../../components/styledComponents/textfield/TextfieldComponent";
import { Button, FormControl } from "@mui/material";
import TextAreaComponent from "../../components/styledComponents/textfield/TextareaComponent";

const ContactoPage = () => {
  return (
    <div className="w-full flex h-full flex-col">
      <div className="opacity-75 w-full">
        <div className="h-80 w-full bg-p1"></div>
      </div>

      <div className="flex justify-center items-center h-full bg-p3 p-4">
        <div className="flex flex-col justify-center bg-white p-6 md:p-12 gap-8 relative bottom-52">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <h1 className="font-afacad text-5xl">Contactanos</h1>
            <h1 className="font-afacad text-xl">
              Uno de nuestros asesores se pondra en contacto contigo muy pronto
            </h1>
          </div>

          <FormControl className="w-full flex flex-col justify-center gap-8 font-afacad">
            <label>Nombre Completo</label>
            <TextFieldComponent label="Nombre Completo *" />
            <label>Email</label>
            <TextFieldComponent label="Email *" />
            <label>Numero de teléfono</label>
            <TextFieldComponent label="Número de teléfono *" />
            <label>Tu mensaje</label>
            <TextAreaComponent label="Tu mensaje" />
            <Button variant="contained" disableElevation className="w-full">
             Enviar
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
