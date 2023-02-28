import React from "react";
import "animate.css";
import {
  SiPython,
  SiDjango,
  SiTypescript,
  SiExpress,
  SiAmazonaws,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import LogoTech from "./LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <SiPython />,
  },
  {
    id: 2,
    icon: <SiDjango />,
  },
  {
    id: 3,
    icon: <SiTypescript />,
  },
  {
    id: 4,
    icon: <SiExpress />,
  },
  {
    id: 5,
    icon: <FaNodeJs />,
  },
  {
    id: 6,
    icon: <SiAmazonaws />,
  },
  {
    id: 7,
    icon: <SiSupabase />,
  },
];

export default function BackendInfo(): React.ReactElement {
  return (
    <div className="animate__animated animate__fadeIn align-items-center justify-content-center">
      <p className="py-4 text-center text-white">
        Como backend he trabajado en el desarrollo de APIs REST con NodeJS +
        Express y Python + DjangoRestFramework. También he implementado
        servicios como Twilio, mercadopago, entre otros. Adicionalmente, he
        trabajado en el despliegue de aplicaciones usando servicios AWS [lambda,
        EC2, S3] y Supabase.
      </p>
      <div className="py-4 row justify-content-center text-center bg-dark-subtle text-emphasis-dark">
        {techLogos.map((techLogo) => (
          <div className="col-sm-1 col-3">
            <LogoTech
              key={techLogo.id}
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
