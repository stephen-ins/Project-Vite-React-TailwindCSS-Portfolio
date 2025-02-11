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

// export function TypographyH2() {
//   return (
//     <h2 className="scroll-m-20 text-6xl pb-2 flex justify-center text-center align-middle items-center font-stretch-semi-expanded tracking-tight antonio-font first:mt-0 mt-20">
//       Développeur Web
//     </h2>
//   );
// }

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
