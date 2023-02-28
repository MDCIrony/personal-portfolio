import React from "react";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
import LogoTech from "../LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <SiMysql title="Logo de MySQL" />,
    title: "Logo de MySQL",
  },
  {
    id: 2,
    icon: <SiPostgresql title="Logo de PostgreSQL" />,
    title: "Logo de PostgreSQL",
  },
  {
    id: 3,
    icon: <SiMongodb title="Logo de MongoDB" />,
    title: "Logo de MongoDB",
  },
  {
    id: 4,
    icon: <SiRedis title="Logo de Redis" />,
    title: "Logo de Redis",
  },
  {
    id: 5,
    icon: <SiFirebase title="Logo de Firebase" />,
    title: "Logo de Firebase",
  },
  {
    id: 6,
    icon: <SiSupabase title="Logo de Supabase" />,
    title: "Logo de Supabase",
  },
  {
    id: 7,
    icon: <SiPrisma title="Logo de Prisma" />,
    title: "Logo de Prisma",
  },
];

export default function DatabaseInfo(): React.ReactElement {
  return (
    <div className="animate__animated animate__fadeIn align-items-center justify-content-center">
      <p className="py-4 text-center text-white">
        He trabajado con bases de datos relacionales como MySQL y PostgreSQL, y
        bases de datos NoSQL como MongoDB y Redis. Adicionalmente, también tengo
        experiencia con servicios de bases de datos en la nube como Firebase y
        Supabase. Finalmente, he realizado proyectos en ORMs como Prisma
        (Typescript) y el ORM integrado de Django.
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
