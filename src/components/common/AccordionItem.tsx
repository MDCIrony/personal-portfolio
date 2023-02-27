import React, { useState } from "react";
import { SiPython, SiTypescript, SiExpress } from "react-icons/si";
import { DiDjango, DiNodejs } from "react-icons/di";
import FooterIcon from "../layout/Footer/components/FooterIcon";

export default function AccordionItem(): React.ReactElement {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion bg-none opacity-75 py-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button bg-dark text-white ${
              isExpanded ? "" : "collapsed"
            }`.trimEnd()}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded={isExpanded ? "true" : "false"}
            aria-controls="flush-collapseOne"
            onClick={handleAccordion}
          >
            Tecnologías Backend
          </button>
          <button
            className={`accordion-button bg-dark text-white ${
              isExpanded ? "" : "collapsed"
            }`.trimEnd()}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded={isExpanded ? "true" : "false"}
            aria-controls="flush-collapseOne"
            onClick={handleAccordion}
          >
            Tecnologías Backend
          </button>
          <button
            className={`accordion-button bg-dark text-white ${
              isExpanded ? "" : "collapsed"
            }`.trimEnd()}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded={isExpanded ? "true" : "false"}
            aria-controls="flush-collapseOne"
            onClick={handleAccordion}
          >
            Tecnologías Backend
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse  ${
            isExpanded ? "show" : ""
          }`.trimEnd()}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body d-flex justify-content-center bg-dark-subtle text-emphasis-dark">
            <FooterIcon href="prisma" alt="Un logo más" icon={<SiPython />} />
            <FooterIcon href="prisma" alt="Un logo más" icon={<DiDjango />} />
            <FooterIcon
              href="prisma"
              alt="Un logo más"
              icon={<SiTypescript />}
            />
            <FooterIcon href="prisma" alt="Un logo más" icon={<SiExpress />} />
            <FooterIcon href="prisma" alt="Un logo más" icon={<DiNodejs />} />
          </div>
        </div>
      </div>
    </div>
  );
}
