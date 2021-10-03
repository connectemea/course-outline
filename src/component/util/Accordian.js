import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import h1 from '@mui/material/h1';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1>Accordion 1</h1>
        </AccordionSummary>
        <AccordionDetails>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h1>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1>Accordion 2</h1>
        </AccordionSummary>
        <AccordionDetails>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </h1>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h1>Disabled Accordion</h1>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
