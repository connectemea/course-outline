import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
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
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h1>Disabled Accordion</h1>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
