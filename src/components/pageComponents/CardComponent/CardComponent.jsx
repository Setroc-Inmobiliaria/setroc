import React from "react";
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

const CardComponent = ({
  nombre,
  precio,
  descripcion,
  servicios,
  enganche,
  id,
  imagenes,
}) => {
  return (
    <div className="w-full bg-yellow-100 flex flex-col justify-center rounded-lg shadow-2xl relative">
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        totalSlides={imagenes.length}
        infinite={true}
        // hasMasterSpinner={true}
      >
        <Slider>
          {imagenes.map((img, index) => {
            return (
              <Slide index={img[index]}>
                <img
                  className="w-full object-cover rounded-t-lg"
                  src={img}
                  alt="terreno"
                />
              </Slide>
            );
          })}
        </Slider>
        <div className="w-full flex flex-row items-center justify-between p-2 absolute bottom-16">
          <ButtonBack>
            <MdNavigateBefore size={100} color="#1565C0"/>
          </ButtonBack>
          <ButtonNext>
            <MdNavigateNext size={100} color="#1565C0"/>
          </ButtonNext>
        </div>
      </CarouselProvider>
      <div className="">
        <h1 className="">Terreno en {nombre}</h1>
        <h1>{servicios.electricidad ? 'electricidad' : ''}</h1>
        <h1>{servicios.pavimentado ? 'pavimentado' : ''}</h1>
      </div>
    </div>
  );
};

export default CardComponent;
