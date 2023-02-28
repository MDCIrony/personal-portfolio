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
import LogoTech from "./LogoTech";

const techLogos = [
  {
    id: 1,
    icon: <SiMysql />,
  },
  {
    id: 2,
    icon: <SiPostgresql />,
  },
  {
    id: 3,
    icon: <SiMongodb />,
  },
  {
    id: 4,
    icon: <SiRedis />,
  },
  {
    id: 5,
    icon: <SiFirebase />,
  },
  {
    id: 6,
    icon: <SiSupabase />,
  },
  {
    id: 7,
    icon: <SiPrisma />,
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
