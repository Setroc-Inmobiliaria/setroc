import { useState } from "react";
import CardComponent from "../../components/pageComponents/CardComponent/CardComponent";
import FilterAccordion from "../../components/pageComponents/Accordion/CustomAccordion";
import db from "../../db/db";

const Terrenos = () => {
  const terreno = db;
  const [terrenoWFilter, setTerrenoWFilter] = useState(terreno);

  const setFilter = (filter) => {
    if(filter === 'todos') {
        setTerrenoWFilter(terreno)
    } else {
    setTerrenoWFilter(terreno)
    setTerrenoWFilter(terreno.filter(terreno => terreno.municipio.toLowerCase() === filter.toLowerCase()));
    }
  };

  const terrenos = terrenoWFilter.map((elemento) => {
    return (
      <CardComponent
        nombre={elemento.nombre}
        ubicacion={elemento.estado}
        municipio={elemento.municipio}
        precio={elemento.precio}
        servicios={elemento.servicios}
        enganche={elemento.enganche}
        metrosCuadrados={elemento.metrosCuadrados}
        costoPorMetroCuadrado={elemento.costoPorMetroCuadrado}
        id={elemento.id}
        key={elemento.id}
        imagenes={elemento.imagenes}
        escritura={elemento.tipoEscritura}
        meses={elemento.mensualidades[0]}
      />
    );
  });

  return (
    <div className="flex flex-col md:flex-row">
      <div className="h-full md:w-5/12 p-3 md:p-12 flex items-center justify-center">
        <FilterAccordion setFilter={setFilter} />
      </div>

      <div className="w-full grid gap-10 p-3 md:grid-cols-2 place-items-center md:gap-12 md:p-12">
        {terrenos}
      </div>
    </div>
  );
};

export default Terrenos;
