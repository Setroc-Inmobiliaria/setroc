import { Header } from "./header";
import {
  FaFacebookF,
  FaInstagram,
  FaRegBuilding,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Privacidad } from "./privacidad/Privacidad";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
        <div>
          <FloatingWhatsApp
            phoneNumber="525577137642"
            accountName="SETROC Inmobiliaria"
            // avatar={setroc}
            allowClickAway={true}
            chatMessage="¡Hola! ¿En qué puedo ayudarte?"
            notification={true}
            statusMessage="Online"
            // darkMode={true}
          />
        </div>
        <Header />

        <main>{children}</main>
        <footer className="flex flex-col-reverse md:flex-row w-full justify-evenly items-center py-12 gap-16 bg-p5 shadow-p2">
          <div className="font-afacad flex flex-col justify-center items-center gap-5">
            <h2>Visitanos</h2>
            <span className="flex flex-row justify-center w-full text-center items-center gap-2 md:text-xl">
              {/* <FaRegBuilding size={35} /> */}
              Gral. Mariano Escobedo 476-piso 12,<br></br> Chapultepec, Anzures,
              Miguel Hidalgo, 11590, CDMX
            </span>
          </div>
          <div className="font-afacad flex flex-col text-center md:text-start">
            <h3> © {new Date().getFullYear()} . SETROC Inmobiliaria</h3>
            <h3 onClick={handleClickOpen} className="cursor-pointer">
              Aviso de privacidad
            </h3>
            <h3>Terminos y Condiciones</h3>
          </div>

          <div>
          <div className="flex flex-row w-full h-12 items-center md:justify-center gap-4 md:p-12 list-none top-16">
            <a
              href="https://www.facebook.com/setroc.inmobiliario?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={45} color="#3b5998" />
            </a>

            <a
              href="https://www.tiktok.com/@setroc.inmobiliario?_t=8i6w7rOUpV7&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok size={45} />
            </a>

            <a
              href="https://www.instagram.com/setroc.inmobiliaria?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={45} />
            </a>

            <FaYoutube color="#CD201F" size={45} />
          </div>
        </div>
          <Privacidad handleClose={handleClose} open={open} />
        </footer>
      </div>
    </>
  );
};
