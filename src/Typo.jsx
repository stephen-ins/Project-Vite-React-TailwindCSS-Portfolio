import React from "react";
// import { Button } from "@heroui/react";
// import Button from "@material-ui/core/Button";
// import { Image } from "@heroui/react";
// import { Image } from "@heroui/image";

export function TypographyH1() {
  return (
    <h1 className="scroll-m-20 text-4xl mt-12 flex justify-center align-middle font-extrabold font-roboto tracking-tight lg:text-4xl">
      Stephen Insixiengmay
    </h1>
  );
}

export function TypographyH2() {
  return (
    <h2 className="scroll-m-20 text-6xl pb-2 flex justify-center text-center align-middle items-center font-stretch-semi-expanded tracking-tight font-roboto first:mt-0 mt-20">
      Web Developer Junior
    </h2>
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

// export default function ImageEffect() {
//   return (
//     <Image
//       isBlurred
//       alt="portrait__portfolio"
//       className="m-5"
//       src="./assets/image/portrait_portfolio.jpg"
//       width={240}
//     />
//   );
// }
