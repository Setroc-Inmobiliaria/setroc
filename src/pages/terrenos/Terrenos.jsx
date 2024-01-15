import React, { useEffect } from "react";
import CardComponent from "../../components/pageComponents/CardComponent/CardComponent";


const Terrenos = () => {

const local = localStorage.getItem('terrenos')
const parse = JSON.parse(local)

const terrenos = parse.map(elemento => {
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
})



return (
    <div className="w-full gap-12 flex flex-col items-center justify-between md:grid md:grid-cols-3 md:col-span-1 place-items-center md:gap-12 p-12">
    {terrenos}
</div>
)
    
}

export default Terrenos