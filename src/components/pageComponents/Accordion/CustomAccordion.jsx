import React, { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const FilterAccordion = ({setFilter}) => {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel, filter) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      setFilter(filter)
    };
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
             <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1', 'todos')} >
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{fontFamily: 'Afacad', fontSize: 22}}>
           Todos los terrenos
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Afacad', fontSize: 18}}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', 'tlayacapan')} >
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{fontFamily: 'Afacad', fontSize: 22}}>
           Tlayacapan
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Afacad', fontSize: 18}}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', 'totoloapan')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{fontFamily: 'Afacad', fontSize: 22}}>Totoloapan</Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Afacad', fontSize: 18}}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', 'San Andres Cuauhtempan')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{fontFamily: 'Afacad', fontSize: 22}}>
         San Andres Cuahutempan
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Afacad', fontSize: 18}}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5', 'Lomas "El Potrero"')}>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{fontFamily: 'Afacad', fontSize: 22}}>Lomas "El Potrero"</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontFamily: 'Afacad', fontSize: 18}}>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}

export default FilterAccordion