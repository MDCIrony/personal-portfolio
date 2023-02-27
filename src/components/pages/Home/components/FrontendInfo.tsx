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
        Como backend he trabajado en el desarrollo de APIs REST con NodeJS +
        Express y Python + DjangoRestFramework. También he implementado
        servicios como Twilio, mercadopago, entre otros. Adicionalmente, he
        trabajado en el despliegue de aplicaciones usando servicios AWS [lambda,
        EC2, S3] y Supabase.
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
