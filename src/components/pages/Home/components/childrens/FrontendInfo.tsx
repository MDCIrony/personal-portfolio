import React from "react";
import { SiBootstrap, SiCss3 } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import LogoTech from "../LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <FaReact title="Logo de React" />,
    title: "Logo de React",
  },
  {
    id: 2,
    icon: <FaNodeJs title="Logo de NodeJS" />,
    title: "Logo de NodeJS",
  },
  {
    id: 3,
    icon: <SiCss3 title="Logo de CSS3" />,
    title: "Logo de CSS3",
  },
  {
    id: 4,
    icon: <SiBootstrap title="Logo de Bootstrap" />,
    title: "Logo de Bootstrap",
  },
];
export default function FrontendInfo(): React.ReactElement {
  return (
    <div className="animate__animated animate__fadeIn align-items-center justify-content-center">
      <p className="py-4 text-center text-white">
        En frontend, he construido soluciones con ReactJS, empleando librerías
        como React Router para el Client Side Rendering, enfocado en la creación
        de Single Page Applications. Además, he trabajado con librerías CSS como
        Bootstrap y animated CSS, estando también muy cómodo con el trabajo en
        CSS puro.
      </p>
      <div className="py-4 row justify-content-center text-center bg-dark-subtle text-emphasis-dark">
        {techLogos.map((techLogo) => (
          <div className="col-sm-1 col-3">
            <LogoTech
              key={techLogo.id}
              title={techLogo.title}
              size="30px"
              color="white"
              icon={techLogo.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
