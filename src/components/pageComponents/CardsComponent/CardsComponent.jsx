import React from "react";
import db from '../../../db/db'
import CardComponent from "../CardComponent/CardComponent";

const CardsComponent = () => {

const terrenos = db.map(elemento => {
    return (
        <CardComponent
        nombre={elemento.nombreDeTerreno}
        precio={elemento.precio}
        descripcion={elemento.descripcion}
        servicios={elemento.servicios}
        enganche={elemento.enganche}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        />
    )
})
  return (
    
        <div className="md:w-[80%] w-full flex flex-col items-center justify-center md:grid md:grid-cols-3 place-items-center md:gap-12">
            {terrenos}
        </div>
   
  )
};

export default CardsComponent;
