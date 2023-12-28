import { Header } from "./header";
import { FaRegBuilding } from "react-icons/fa";
import { Privacidad } from "./privacidad/Privacidad";
import { useState } from "react";

export const Layout = ({ children }) => {

  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <footer className="flex flex-col md:flex-row w-full justify-evenly items-center py-12 gap-10 bg-p5">
          <div className="font-afacad flex flex-col gap-5">
            <h2>Contactanos</h2>
            <span className="flex flex-row justify-center items-center gap-2 md:text-xl">
              <FaRegBuilding size={35} />
              Gral. Mariano Escobedo 476-piso 12,<br></br> Chapultepec, Anzures,
              Miguel Hidalgo, 11590, CDMX
            </span>
          </div>
          <div className="font-afacad flex flex-col">
            <h3> © {new Date().getFullYear()} . SETROC Inmobiliaria</h3>
            <h3 onClick={handleClickOpen} className="cursor-pointer">Aviso de privacidad</h3>
            <h3>Terminos y Condiciones</h3>
          </div>
           <Privacidad
            handleClose={handleClose}
            open={open}
           />
        </footer>
      </div>
    </>
  );
};
