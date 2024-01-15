import React from "react";
import db from '../../../db/db'
import CardComponent from "../CardComponent/CardComponent";

const CardsComponent = () => {

const x_terrenos = localStorage.setItem('terrenos', db)


const terrenos = db.map(elemento => {
    return (
        <CardComponent
        nombre={elemento.nombre}
        ubicacion={elemento.ubicacion}
        municipio={elemento.municipio}
        precio={elemento.precio}
        servicios={elemento.servicios}
        enganche={elemento.enganche}
        metrosCuadrados={elemento.metrosCuadrados}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        escritura={elemento.tipoEscritura}
        meses={elemento.mensualidades[0]}
        />
    )
}).slice(0,3)

const terrenos2 = db.map(elemento => {
    return (
        <CardComponent
        nombre={elemento.nombre}
        ubicacion={elemento.ubicacion}
        municipio={elemento.municipio}
        precio={elemento.precio}
        servicios={elemento.servicios}
        enganche={elemento.enganche}
        metrosCuadrados={elemento.metrosCuadrados}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        escritura={elemento.tipoEscritura}
        meses={elemento.mensualidades[0]}
        />
    )
}).slice(4,6)
  return (
    <div className="w-full flex flex-col gap-12 ">
        <div className="w-full gap-12 flex flex-col items-center justify-between md:grid md:grid-cols-3 md:col-span-1 place-items-center md:gap-12 ">
            {terrenos}
        </div>

        <div className="w-full hidden gap-12 flex-col items-center justify-between md:grid md:grid-cols-2 md:col-span-2 place-items-center md:gap-12 ">
            {terrenos2}
        </div>

    </div>
        

        
   
  )
};

export default CardsComponent;
