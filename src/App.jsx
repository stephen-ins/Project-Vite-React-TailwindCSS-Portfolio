import React, { useState } from "react";
import "./index.css";
import { TypographyH1, TypographyH2 } from "./typo";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-zinc-100 text-gray-900"
      } transition-colors duration-300 min-h-screen flex flex-col items-center`}
    >
      <label
        htmlFor="AcceptConditions"
        className="  flex sm:ml-10 md:ml-auto relative lg:ml-auto h-12 w-22 cursor-pointer rounded-full hover:shadow-xl text-gray-800 font-bold  py-2 px-5 m-16 bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-blue-300"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span
          onClick={toggleDarkMode}
          className=" justify-center flex items-center text-center absolute inset-y-0 start-0 m-1 size-10  rounded-full bg-white transition-all peer-checked:start-10 text-slate-500"
        >
          {darkMode ? "Light" : "Dark"}
        </span>
      </label>

      <header className="py-8 px-4 flex justify-between items-center  max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <div className="col-span-1 flex justify-center">
            <img
              className=" sm:w-50  sm:h-60  md:w-40 md:h-80 lg:w-60 lg:h-100 rounded-full w-50 h-100 object-cover transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
              src="src/assets/image/portrait_portfolio.jpg"
              alt="image description"
            />
          </div>
          <div className="col-span-2 text-start flex flex-col justify-center">
            <TypographyH1 />
            <TypographyH2 />
            <div className=" align-middle justify-center mx-auto mt-20 md:w-125 sm:grid-cols-2 md:flex md:mx-0 md:justify-center md:contents-center  sm:w-70 lg:w-full text-start space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <a
                href="#about"
                className=" h-12 flex items-center  w-full justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                À propos
              </a>
              <a
                href="#course"
                className=" h-12 flex items-center justify-center w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Parcours
              </a>
              <a
                href="#projects"
                className="h-12 flex items-center justify-center w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Projets
              </a>
              <a
                href="#contact"
                className=" h-12 flex items-center w-full justify-center bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded  hover:bg-red-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-6xl">
        <section id="about" className="py-16 px-4 ">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">À propos de moi</h2>
            <p className="text-lg mb-8 px-8 text-justify">
              Guidé par une véritable passion pour le développement
              informatique, je me consacre à la création de sites web modernes
              et réactifs, en couvrant aussi bien le front-end que le back-end.
              Ma stack couvre une gamme étendue de technologies, incluant HTML,
              CSS, JavaScript, React, et TailwindCSS pour la partie front-end,
              ainsi que SQL et PHP pour la partie back-end. Actuellement engagé
              dans une formation de reconversion professionnelle visant
              l'obtention du titre de développeur web, je suis en quête d'un
              stage en immersion du 17 mars au 30 mai 2025. Ce stage me
              permettrait de mettre en pratique les connaissances théoriques et
              techniques que j'ai acquises, tout en m'intégrant au sein d'une
              équipe dynamique et innovante. Mon objectif est non seulement
              d'obtenir mon diplôme, mais aussi de contribuer de manière
              significative à des projets concrets et d'approfondir mes
              compétences professionnelles dans un environnement réel.
            </p>
            <p className="text-lg mb-8 px-8 text-justify">
              Pendant ma première partie de ma carrière professionnelle, j'ai eu
              l'honneur et la chance de servir mon pays en tant que militaire
              dans l'Armée de Terre. Sous-officier de carrière, j'ai acquis de
              solides compétences en management ainsi qu'une grande expertise
              dans la sécurité des systèmes d'information. Mes 21 années de
              service m'ont permis de développer ces compétences, en particulier
              dans le domaine des télécommunications tactiques militaires. Au
              cours de cette longue période, j'ai eu l'occasion de diriger des
              équipes, de former nos sous-officiers, de gérer des projets
              complexes, et de contribuer à la protection des infrastructures
              critiques, garantissant ainsi la sécurité des communications et
              des informations sensibles.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <div className="     relative overflow-visible  hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0  hover:bg-amber-800  bg-gray-200 dark:bg-gray-600 p-4 rounded-lg  m-10 cursor-pointer">
                <h3 className="text-2xl font-bold underline italic text-slate-200">
                  Hard skills
                </h3>
                <ul className="m-4  text-start mx-10">
                  <li className="font-semibold  mb-2 text-xl">
                    JavaScript/React
                  </li>
                  <li className="font-semibold mb-2 text-xl">TailwindCSS</li>
                  <li className="font-semibold mb-2 text-xl">HTML/CSS</li>
                  <li className="font-semibold mb-2 text-xl">PHP/Symfony</li>
                  <li className="font-semibold mb-2 text-xl">SQL</li>
                  <li className="font-semibold mb-2 text-xl">GitHub</li>
                </ul>
              </div>
              <div className="  relative overflow-visible  hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 hover:bg-teal-600 bg-gray-200 dark:bg-gray-600 p-4 rounded-lg  m-10 cursor-pointer ">
                <h3 className="text-2xl  font-bold underline italic text-slate-200">
                  Soft skills
                </h3>
                <ul className="m-4  mx-10 text-start ">
                  <li className="font-semibold mb-2 text-xl">Créativité</li>
                  <li className="font-semibold mb-2 text-xl">Autonomie</li>
                  <li className="font-semibold mb-2 text-xl">Sens du détail</li>
                  <li className="font-semibold mb-2 text-xl">Conformisme</li>
                  <li className="font-semibold mb-2 text-xl">Adaptabilité</li>
                  <li className="font-semibold mb-2 text-xl">
                    Travail en équipe
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="#contact"
              className=" h-6 hover:bg-red-900  bg-red-400 text-white font-bold py-2 px-4 rounded mt-8"
            >
              Contactez-moi
            </a>
          </div>
        </section>
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-600 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="course" className="text-3xl font-bold mb-8">
              Parcours
            </h2>

            <div className="flex flex-col space-y-8 shadow-neutral-800-60 dark:shadow-neutral-800-50">
              <div className=" bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">
                  Formation en Développement Web et Web Mobile
                </h3>
                <p className="text-gray-600 font-bold dark:text-gray-400">
                  Afpa - Chartres
                </p>
                <p className="mt-2 text-yellow-800">
                  Septembre 2024 - Juin 2025
                </p>
                <p className="mt-2 text-start">
                  Développement de sites web réactifs et performants. Framework
                  React, Symfony, mongoDB.
                </p>
                <p className="mt-2 text-start">
                  Apprentissage des technologies modernes de développement web.
                  Github.
                </p>
                <p className="mt-2 text-start">
                  Front-end : HTML, CSS, JavaScript, Sass, Bootstrap,
                  TailwindCSS.
                </p>
                <p className="mt-2 text-start">
                  Back-end : PHP, MySQL, NoSQL, API REST.
                </p>
                <p className="mt-2 text-start">
                  Maquettage de site avec l'outil Figma Web Design.
                </p>
              </div>

              <div className=" bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">
                  Formation en Développement Web et Web Mobile
                </h3>
                <p className="text-gray-600 font-bold dark:text-gray-400">
                  Afpa - Chartres
                </p>
                <p className="mt-2 text-yellow-800">
                  Septembre 2024 - Juin 2025
                </p>
                <p className="mt-2 text-start">
                  Développement de sites web réactifs et performants. Framework
                  React, Symfony, mongoDB.
                </p>
                <p className="mt-2 text-start">
                  Apprentissage des technologies modernes de développement web.
                  Github.
                </p>
                <p className="mt-2 text-start">
                  Front-end : HTML, CSS, JavaScript, Sass, Bootstrap,
                  TailwindCSS.
                </p>
                <p className="mt-2 text-start">
                  Back-end : PHP, MySQL, NoSQL, API REST.
                </p>
                <p className="mt-2 text-start">
                  Maquettage de site avec l'outil Figma Web Design.
                </p>
              </div>

              <div className=" bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">
                  Formation en Développement Web et Web Mobile
                </h3>
                <p className="text-gray-600 font-bold dark:text-gray-400">
                  Afpa - Chartres
                </p>
                <p className="mt-2 text-yellow-800">
                  Septembre 2024 - Juin 2025
                </p>
                <p className="mt-2 text-start">
                  Développement de sites web réactifs et performants. Framework
                  React, Symfony, mongoDB.
                </p>
                <p className="mt-2 text-start">
                  Apprentissage des technologies modernes de développement web.
                  Github.
                </p>
                <p className="mt-2 text-start">
                  Front-end : HTML, CSS, JavaScript, Sass, Bootstrap,
                  TailwindCSS.
                </p>
                <p className="mt-2 text-start">
                  Back-end : PHP, MySQL, NoSQL, API REST.
                </p>
                <p className="mt-2 text-start">
                  Maquettage de site avec l'outil Figma Web Design.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 w-full">
          <div className="max-w-8xl mx-auto text-center">
            <h2 id="projects" className="text-3xl font-bold mb-12">
              Projets
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className=" justify-center items-center align-middle   bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
                >
                  <img
                    src="https://placehold.co/600x400/png"
                    alt={`Project ${index + 1}`}
                    className="rounded-lg w-full mx-auto flex mb-4"
                  />
                  <h3 className=" text-white text-xl font-bold">
                    Projet {index + 1}
                  </h3>
                  <p className=" text-white mt-2">
                    Description du projet {index + 1}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="py-16 px-4 bg-gray-100 dark:bg-gray-700 w-full"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-l font-semibold">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className=" font-semibold block text-l ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className=" font-semibold block text-l "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className=" text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={6}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className=" flex flex-col justify-evenly h-96  py-8 px-4 bg-gray-200 dark:bg-gray-900 text-center w-full">
        <div className="mt-4  justify-center space-x-4">
          <a
            href="cv/CV_Développeur_web_Stephen_Insixiengmay.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          >
            Charger le CV
          </a>
        </div>
        <p className="   text-sm text-white">
          © 2025 Stephen Ins - Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default App;
