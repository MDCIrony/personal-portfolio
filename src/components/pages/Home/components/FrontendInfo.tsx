import React from "react";
import { SiBootstrap, SiCss3 } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import LogoTech from "./LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <FaReact />,
  },
  {
    id: 2,
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    icon: <SiCss3 />,
  },
  {
    id: 4,
    icon: <SiBootstrap />,
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
      <div className="py-4 d-flex justify-content-center text-center bg-dark-subtle text-emphasis-dark">
        {techLogos.map((techLogo) => (
          <LogoTech
            key={techLogo.id}
            size="30px"
            color="white"
            icon={techLogo.icon}
          />
        ))}
      </div>
    </div>
  );
}
