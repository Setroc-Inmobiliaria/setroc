import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { TiArrowSortedDown } from "react-icons/ti";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



// eslint-disable-next-line react/prop-types
const FilterAccordion = ({ setFilter }) => {

  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel, filter) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setFilter(filter)
  };

  const sxTitleAccordion = {
    fontFamily: 'Nunito',
    fontSize: 25,
    textAlign: 'center',
    width: '100%',
    color: '#276296',
    fontWeight: 'bold'
  }

  const sxAccordionContainer = {
    backgroundColor: '#D9DFEC'
  }


  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full w-full">

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1', 'todos')} >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          expandIcon={<TiArrowSortedDown />}
          sx={sxAccordionContainer}
        >
          <Typography sx={sxTitleAccordion}>
            Todos los terrenos
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#D9DFEC' }}>
          <Typography sx={{
            fontFamily: 'Nunito',
            fontSize: 18,
            width: '100%',
            color: '#276296',
          }}>
            Cada municipio ofrece una gama única de oportunidades de inversión, ya sea para vivienda, vacaciones o como fuente de ingresos. Explora estas opciones y encuentra el terreno perfecto para tus sueños en Morelos.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', 'totoloapan')}>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          expandIcon={<TiArrowSortedDown />}
          sx={{ backgroundColor: '#D9DFEC' }}

        >
          <Typography sx={sxTitleAccordion}>Totoloapan</Typography>

        </AccordionSummary>
        <AccordionDetails
          sx={sxAccordionContainer}
        >
          <Typography sx={{ fontFamily: 'Afacad', fontSize: 18 }}>
            Totoloapan te invita a explorar Aguador, Tlatenco, y Valle Verde. Con servicios completos y ubicaciones estratégicas, estos terrenos son ideales para tu próximo proyecto. Desde la Escuela de Estudios Superiores de Totolapan hasta la tranquilidad de sus calles, Totoloapan es tu destino.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', 'San Andres Cuauhtempan')}>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          expandIcon={<TiArrowSortedDown />}
          sx={{ backgroundColor: '#D9DFEC' }}

        >
          <Typography sx={sxTitleAccordion}>
            San Andres Cuahutempan
          </Typography>

        </AccordionSummary>
        <AccordionDetails
          sx={sxAccordionContainer}
        >
          <Typography sx={{ fontFamily: 'Afacad', fontSize: 18 }}>
            Descubre las oportunidades en San Andrés Cuauhtempan, Morelos, con terrenos como Acatitla, Colatitla, y Rancho San Miguel. Estos lotes ofrecen tamaños diversos y opciones de financiamiento atractivas. Desde la cercanía al Centro de San Andrés Cuauhtempan hasta la conexión a Tlayacapan, invierte en un futuro prometedor.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', 'ahuatlan')}>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          expandIcon={<TiArrowSortedDown />}
          sx={{ backgroundColor: '#D9DFEC' }}

        >
          <Typography sx={sxTitleAccordion}>
            Ahuatlan
          </Typography>

        </AccordionSummary>
        <AccordionDetails
          sx={sxAccordionContainer}
        >
          <Typography sx={{ fontFamily: 'Afacad', fontSize: 18 }}>
            Descubre Zacanco en Ahuatlan, Morelos. Con opciones de financiamiento atractivas, calles de 8 metros y servicios completos, Zacanco es la elección perfecta para aquellos que buscan un terreno en una ubicación privilegiada, a solo 5 minutos de la Escuela de Estudios Superiores de Totolapan (UAEM).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5', 'oaxtepec')}>
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          expandIcon={<TiArrowSortedDown />}
          sx={{ backgroundColor: '#D9DFEC' }}

        >
          <Typography sx={sxTitleAccordion}>Oaxtepec</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={sxAccordionContainer}
        >
          <Typography sx={{ fontFamily: 'Afacad', fontSize: 18 }}>
            Ubicado en Oaxtepec, Potrero ofrece un entorno único a solo 15 minutos de Six Flags Oaxtepec. Este terreno privado colinda con “Lomas de Cocoyoc” y brinda la oportunidad de invertir en un lugar de esparcimiento y descanso, a solo 1 hora con 30 minutos de la CDMX.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FilterAccordion