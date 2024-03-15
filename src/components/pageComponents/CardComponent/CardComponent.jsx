/* eslint-disable react/prop-types */
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import {goToTop} from "../../../utils/functions";

const CardComponent = ({
  nombre,
  costoPorMetroCuadrado,
  metrosCuadrados,
  municipio,
  ubicacion,
  imagenes,
}) => {
  function currencyFormatter({ currency, value }) {
    const formatter = new Intl.NumberFormat("es-EU", {
      style: "currency",
      minimumFractionDigits: 0,
      currency,
    });

    const rounded = Math.round(value);
    return formatter.format(rounded);
  }

  const precio = (metrosCuadrados[0] * costoPorMetroCuadrado)

  const formatPrice = currencyFormatter({
    currency: "MXN",
    value: precio,
  });

  
  const enganche = precio * 0.30

  const formatEnganche = currencyFormatter({
    currency: "MXN",
    value: enganche,
  });

  // const mensualidades = (precio - enganche) / meses
  // const formatMens = Math.round(mensualidades)
  const url = nombre




  return (
    <div className="w-full bg-white flex flex-col shadow-2xl border-p2 border-2 md:transition-all md:hover:scale-105 md:hover:transition-all">
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        totalSlides={imagenes.length}
        infinite={true}
        className="w-full"
        // hasMasterSpinner={true}
      >
        <Slider className="h-40 w-full">
          {imagenes.map((img, index) => {
            return (
              <Slide key={index} index={img[index]}>
                <Link to={`/propiedades/${url}`}><img
                  className="h-40 w-full object-cover object-botom"
                  src={img}
                  alt="terreno"
                /></Link>
              </Slide>
            );
          })}
        </Slider>
        <div className="flex flex-row items-center justify-between">
          <ButtonBack>
            <MdNavigateBefore size={25} color="#1565C0" />
          </ButtonBack>
          <ButtonNext>
            <MdNavigateNext size={25} color="#1565C0" />
          </ButtonNext>
        </div>
      </CarouselProvider>

      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-col p-4 font-afacad text-p2 font-light">
          <div className="w-full flex flex-col justify-center ">
            <h1>Desrrollo en {nombre}</h1>
            <h1 className="">
               {municipio}, {ubicacion}
            </h1>
          </div>

          <div className="">
            <span className="text-lg text-p3 font-medium flex flex-row items-center gap-2">
              <IoMdPricetag />
              Desde {formatPrice}
            </span>
          </div>
        </div>

        <div className="w-[25%] flex flex-col justify-center items-center">
          <span className="text-p4">
            <FaCircleDollarToSlot size={20} />
          </span>
          <span className="flex flex-col text-center text-xs">
            <span>Enganche</span>
            <span>Desde {formatEnganche}</span>
          </span>
        </div>
      </div>

      
    </div>
  );
};

export default CardComponent;
