import React from "react";
import { TypeAnimation } from "react-type-animation";

// import Button from "@material-ui/core/Button";
// import { Image } from "@heroui/image";

export function TypographyH0() {
  return (
    <h1 className="scroll-m-20 text-7xl mt-12 flex justify-center align-middle font-extrabold antonio-font tracking-tight lg:text-4xl">
      Hi
      <span role="img" aria-label="saluting hand">
        🫡
      </span>
    </h1>
  );
}

export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-6xl mt-12 flex justify-center align-middle font-extrabold antonio-font tracking-tight lg:text-4xl">
      I'm Stephen
    </h1>
  );
}

export function TypographyH2() {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to my portfolio", // Texte à afficher
        1500,
        "", // Pause de 1 seconde
      ]}
      speed={0.05} // Vitesse de frappe
      style={{ fontSize: "4rem" }}
      wrapper="h2"
      repeat={Infinity} // Répéter l'animation à l'infini
      className="scroll-m-20 text-6xl pb-2 flex justify-center text-center align-middle items-center font-stretch-semi-expanded tracking-tight antonio-font first:mt-0 mt-20"
    />
  );
}

export function TypographyH3() {
  return (
    <TypeAnimation
      sequence={[
        "un développeur web junior passionné par le développement informatique, je me consacre à la création de sites web modernes et réactifs, en couvrant aussi bien le front-end que le back-end. Ma stack couvre une gamme étendue de technologies, incluant HTML, CSS, JavaScript, React, et TailwindCSS pour la partie front-end, ainsi que SQL et PHP pour la partie back-end. Actuellement engagé dans une formation de reconversion professionnelle visant l'obtention du titre professionnel de développeur web, je suis en quête d'un stage en immersion du 17 mars au 30 mai 2025. Ce stage me permettrait de mettre en pratique les connaissances théoriques et techniques que j'ai acquises, tout en m'intégrant au sein d'une équipe dynamique et innovante. Mon objectif est non seulement d'obtenir mon diplôme, mais aussi de contribuer de manière significative à des projets concrets et d'approfondir mes compétences professionnelles dans un environnement réel.",
      ]}
      speed={80} // Vitesse de frappe
      style={{
        fontSize: "1.5rem",
        lineHeight: "2rem",
        letterSpacing: "0.05em",
        wordSpacing: "0.1em",
      }}
      wrapper="h2"
      repeat={1} // Répéter l'animation à l'infini
      className="scroll-m-20 text-6xl pb-2 flex justify-center text-start align-middle items-center font-stretch-semi-expanded tracking-tight font-roboto first:mt-0"
    />
  );
}

export function TypographyH4() {
  return (
    <TypeAnimation
      sequence={[
        " Pendant ma première partie de carrière professionnelle, j'ai eu l'honneur et la chance de servir mon pays en tant que militaire dans l'Armée de Terre. Sous-officier de carrière, j'ai acquis de solides compétences en management ainsi qu'une grande expertise dans la sécurité des systèmes d'information. Mes 21 années de service m'ont permis de développer ces compétences, en particulier dans le domaine des télécommunications tactiques militaires. Au cours de cette longue période, j'ai eu l'occasion de diriger des équipes, de former des sous-officiers, de gérer des projets complexes, et de contribuer à la protection des infrastructures critiques, garantissant ainsi la sécurité des communications et des informations sensibles.",
      ]}
      speed={80} // Vitesse de frappe
      style={{
        fontSize: "1.5rem",
        lineHeight: "2rem",
        letterSpacing: "0.05em",
        wordSpacing: "0.1em",
      }}
      wrapper="h2"
      repeat={1} // Répéter l'animation à l'infini
      className="scroll-m-20 text-6xl pb-2 flex justify-center text-start align-middle items-center font-stretch-semi-expanded tracking-tight font-roboto first:mt-0"
    />
  );
}

export function TypographyH5() {
  return (
    <TypeAnimation
      sequence={[
        "Bienvenue dans mon univers de développement web, où chaque projet devient une aventure inoubliable ! Avec une créativité débordante, une autonomie affirmée, et un sens du détail minutieux, je transforme des idées en expériences numériques immersives. En respectant rigoureusement les standards et en faisant preuve d'une adaptabilité face aux défis du web moderne, je travaille efficacement en équipe pour proposer des solutions novatrices et impeccables. Chaque projet me nourrit et me pousse à grandir, à apprendre et à développer de nouvelles compétences.",
      ]}
      speed={80} // Vitesse de frappe
      style={{
        fontSize: "1.5rem",
        lineHeight: "2rem",
        letterSpacing: "0.05em",
        wordSpacing: "0.1em",
      }}
      wrapper="h2"
      repeat={1} // Répéter l'animation à l'infini
      className="scroll-m-20 text-6xl pb-2 flex justify-center text-start align-middle items-center font-stretch-semi-expanded tracking-tight font-roboto first:mt-0"
    />
  );
}

export default function ButtonStyleHover() {
  return (
    <a
      href="#about"
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      À propos de moi
    </a>
  );
}

// export const textAnimateComponent = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed once, initially
//         "We produce food for Mice",
//         1000,
//         "We produce food for Hamsters",
//         1000,
//         "We produce food for Guinea Pigs",
//         1000,
//         "We produce food for Chinchillas",
//         1000,
//       ]}
//       speed={50}
//       style={{ fontSize: "2em" }}
//       repeat={Infinity}
//     />
//   );
// };
