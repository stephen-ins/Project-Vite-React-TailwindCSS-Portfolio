import React from "react";
import { TypeAnimation } from "react-type-animation";

// import Button from "@material-ui/core/Button";
// import { Image } from "@heroui/image";

export function TypographyH0() {
  return (
    <h1 className="scroll-m-20 text-4xl mt-12 flex justify-center align-middle font-extrabold antonio-font tracking-tight lg:text-5xl">
      Hi
      <span role="img" aria-label="saluting hand">
        🫡
      </span>
    </h1>
  );
}

export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-5xl mt-12 flex justify-center align-middle font-extrabold antonio-font tracking-tight lg:text-5xl">
      I'm Stephen
    </h1>
  );
}

export function TypographyH2() {
  return (
    <TypeAnimation
      sequence={[
        3000, // Délai avant le début de l'animation
        "Welcome", // Texte à afficher
        4000,
        "",
      ]}
      speed={0.1} // Vitesse de frappe
      style={{ fontSize: "4.5rem" }}
      wrapper="h2"
      repeat={Infinity} // Répéter l'animation à l'infini
      className="scroll-m-20 text-5xl pb-2 flex justify-center text-center align-middle items-center font-stretch-semi-expanded tracking-tight antonio-font first:mt-0 mt-20"
    />
  );
}

export function TypographyH2bis() {
  return (
    <TypeAnimation
      sequence={[
        3500,
        "to my portfolio", // Texte à afficher
        2000,
        "",
      ]}
      speed={0.3} // Vitesse de frappe
      style={{ fontSize: "3rem" }}
      wrapper="h2"
      repeat={Infinity} // Répéter l'animation à l'infini
      className="scroll-m-20 text-5xl pb-2 flex justify-center text-center align-middle items-center font-stretch-semi-expanded tracking-tight antonio-font first:mt-0 mt-20"
    />
  );
}

export function TypographyH3() {
  return (
    <TypeAnimation
      sequence={[
        "un développeur web junior passionné par le développement informatique, je me consacre à la création de sites web modernes et réactifs, en couvrant aussi bien le front-end que le back-end. Ma stack couvre une gamme étendue de technologies, incluant HTML, CSS, JavaScript, React, et TailwindCSS pour la partie front-end, ainsi que SQL et PHP pour la partie back-end. Actuellement engagé dans une formation de reconversion professionnelle visant l'obtention du titre professionnel de développeur web, je suis en quête d’une alternance pour préparer un Bachelor Concepteur Développeur d’Applications (Bac+3) dans le but d'approfondir mes compétences en développement web et logiciel. Motivé, rigoureux et passionné par les technologies modernes, je souhaite intégrer une équipe dynamique où je pourrai contribuer de manière significative à des projets concrets et mettre en exergue toutes mes compétences professionnelles acquises ou non dans un environnement réel.",
      ]}
      speed={65} // Vitesse de frappe
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
      speed={65} // Vitesse de frappe
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
      speed={65} // Vitesse de frappe
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
