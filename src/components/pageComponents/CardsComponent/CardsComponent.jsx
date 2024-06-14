import CardComponent from "../CardComponent/CardComponent";

// eslint-disable-next-line react/prop-types
const CardsComponent = ({dbFirebase}) => {


// eslint-disable-next-line react/prop-types
const terrenos = dbFirebase.map(elemento => {
    return (
        <CardComponent
        nombre={elemento.nombre}
        ubicacion={elemento.estado }
        municipio={elemento.municipio}
        precio={elemento.precio}
        servicios={elemento.servicios}
        // enganche={elemento.enganche}
        metrosCuadrados={elemento.metrosCuadrados}
        costoPorMetroCuadrado={elemento.costoPorMetroCuadrado}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        escritura={elemento.tipoEscritura}
        meses={elemento.mensualidades[0]}
        />
    )
}).slice(0,3)

// eslint-disable-next-line react/prop-types
const terrenos2 = dbFirebase.map(elemento => {
    return (
        <CardComponent
        nombre={elemento.nombre}
        ubicacion={elemento.estado}
        municipio={elemento.municipio}
        precio={elemento.precio}
        servicios={elemento.servicios}
        // enganche={elemento.enganche}
        metrosCuadrados={elemento.metrosCuadrados}
        costoPorMetroCuadrado={elemento.costoPorMetroCuadrado}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        escritura={elemento.tipoEscritura}
        meses={elemento.mensualidades[0]}
        />
    )
}).slice(4,6)
  return (
    <div className="w-full flex flex-col gap-12">
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
