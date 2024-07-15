import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled((props) => <AccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
    fontSize: "2rem",
    lineHeight: "2.5rem",
    fontWeight: "700",
  })
);

const StyledAccordionBis = styled((props) => <AccordionDetails {...props} />)(
  ({ theme }) => ({
    backgroundColor: "rgb(0,0,0)",
    color: "rgb(255,255,255)",
  })
);

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <StyledAccordion
          expandIcon={<MdKeyboardArrowDown className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          COMPOSITION
        </StyledAccordion>
        <StyledAccordionBis>
          <ul className="flex flex-col gap-2">
            <li>Notre T-shirt Classique Beige est fabriqué au Portugal</li>
            <li>100% Coton - 180 GSM</li>
          </ul>
        </StyledAccordionBis>
      </Accordion>
      <Accordion>
        <StyledAccordion
          expandIcon={<MdKeyboardArrowDown className="text-white" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          ENTRETIEN
        </StyledAccordion>
        <StyledAccordionBis>
          <ul className="flex flex-col gap-2">
            <li>
              Veuillez patienter 24 heures après avoir reçu l'article avant de
              le laver.
            </li>
            <li>Retournez les vêtements à l'envers avant de les laver.</li>
            <li>Lavage à 30°C</li>
            <li>Si flocage ou sérigraphie ne pas mettre dans le sèche-linge</li>
            <li>
              Ne jamais repasser directement sur les matériaux appliqués.
              Repassez toujours à l'envers
            </li>
          </ul>
        </StyledAccordionBis>
      </Accordion>
    </div>
  );
}
