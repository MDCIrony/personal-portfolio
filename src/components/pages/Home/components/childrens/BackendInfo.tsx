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
import LogoTech from "../LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <SiPython title="Logo de Python" />,
    title: "Logo de Python.",
  },
  {
    id: 2,
    icon: <SiDjango title="Logo de Django" />,
    title: "Logo de Django",
  },
  {
    id: 3,
    icon: <SiTypescript title="Logo de Typescript" />,
    title: "Logo de Typescript",
  },
  {
    id: 4,
    icon: <SiExpress title="Logo de Express" />,
    title: "Logo de Express",
  },
  {
    id: 5,
    icon: <FaNodeJs title="Logo de NodeJS" />,
    title: "Logo de NodeJS",
  },
  {
    id: 6,
    icon: <SiAmazonaws title="Logo de AWS" />,
    title: "Logo de AWS",
  },
  {
    id: 7,
    icon: <SiSupabase title="Logo de Supabase" />,
    title: "Logo de Supabase",
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
