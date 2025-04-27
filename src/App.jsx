import React, { useState } from "react";
import "./index.css";
import {
  TypographyH0,
  TypographyH1,
  TypographyH2,
  TypographyH2bis,
  TypographyH3,
  TypographyH4,
  TypographyH5,
} from "./Typo";
import projects from "./Projects";
import QuoteComponentLeft from "./QuoteLeft";
import QuoteComponentRight from "./QuoteRight";
import { motion } from "framer-motion";
import Card from "./Card";
import ContactForm from "./form";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-zinc-100 text-gray-900"
      } transition-colors duration-300 min-h-screen flex flex-col items-center overflow-x-hidden`}
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
          <motion.div
            className="col-span-1 flex justify-center"
            initial={{ opacity: 0.1, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 5, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              className=" sm:w-50 sm:h-60 md:w-40 md:h-80 lg:w-60 lg:h-100 rounded-full w-50 h-100 object-cover"
              src="/image/portrait/portrait_stephen_st-malo.jpg"
              alt="image saint malo"
            />
          </motion.div>
          <div className="col-span-2 text-start flex flex-col justify-center">
            <TypographyH0 />
            <TypographyH1 />
            <TypographyH2 />
            <TypographyH2bis />
            <div className="align-middle justify-center mx-auto mt-20 md:w-125 sm:grid-cols-2 md:flex md:mx-0 md:justify-center md:contents-center sm:w-70 lg:w-full text-start md:space-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
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
            <p className="text-2xl text-start mb-2 letter-spacing-0.05em word-spacing-0.1em font-roboto text-2xl sm:text-2xl md:text-2xl">
              <QuoteComponentLeft />
              Je suis <strong>Stephen Insixiengmay</strong>,
              <TypographyH3 />
              <QuoteComponentRight />
            </p>

            <div className="  flex flex-wrap justify-center space-x-4">
              <motion.div
                className="relative overflow-visible hover:-translate-y-1 px-2 sm:px-6 md:px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 hover:bg-amber-800 bg-gray-200 dark:bg-gray-600 p-4 rounded-lg m-2 sm:m-6 md:m-10 cursor-pointer"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold underline italic text-slate-200">
                  Hard skills
                </h3>
                <ul className="m-1  text-start mx-10">
                  <li className="font-semibold  mb-2 text-xl">HTML</li>
                  <li className="font-semibold mb-2 text-xl">
                    CSS / Tailwind / Bootstrap / Sass
                  </li>
                  <li className="font-semibold mb-2 text-xl">JavaScript</li>
                  <li className="font-semibold mb-2 text-xl">ReactJS</li>
                  <li className="font-semibold mb-2 text-xl">PHP</li>
                  <li className="font-semibold mb-2 text-xl">Symfony</li>
                  <li className="font-semibold mb-2 text-xl">SQL / NoSQL</li>
                  <li className="font-semibold mb-2 text-xl">Git / GitHub</li>
                  <li className="font-semibold mb-2 text-xl">Figma</li>
                </ul>
              </motion.div>

              <motion.div
                className="relative overflow-visible hover:-translate-y-1 px-2 sm:px-6 md:px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 hover:bg-neutral-200 bg-gray-300 dark:bg-gray-300 p-4 rounded-lg m-2 sm:m-6 md:m-10 cursor-pointer  flex flex-wrap justify-center space-x-4"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="/image/icone_skills/javascript-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/react-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/php-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/azuresqldatabase-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/symfony-original-wordmark.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                {/* <img
                  src="/image/icone_skills/nodejs-original-wordmark.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                /> */}
                <img
                  src="/image/icone_skills/html5-original-wordmark.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/css3-original-wordmark.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/bootstrap-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/tailwindcss-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/figma-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
                <img
                  src="/image/icone_skills/github-original.svg"
                  alt=""
                  className="h-16 w-16 m-4"
                />
              </motion.div>

              <motion.div
                className="relative overflow-visible hover:-translate-y-1 px-2 sm:px-6 md:px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 hover:bg-teal-600 bg-gray-200 dark:bg-gray-600 p-4 rounded-lg m-2 sm:m-6 md:m-10 cursor-pointer"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl  font-bold underline italic text-slate-200">
                  Soft skills
                </h3>
                <ul className="m-1  mx-10 text-start ">
                  <li className="font-semibold mb-2 text-xl">
                    Communication orale
                  </li>
                  <li className="font-semibold mb-2 text-xl">
                    Esprit d'équipe
                  </li>
                  <li className="font-semibold mb-2 text-xl">Adaptabilité</li>
                  <li className="font-semibold mb-2 text-xl">
                    Esprit critique
                  </li>
                  <li className="font-semibold mb-2 text-xl">Sens du détail</li>
                  <li className="font-semibold mb-2 text-xl">
                    Gestion & Analyse
                  </li>
                </ul>
              </motion.div>
            </div>
            {/* <a
              href="#contact"
              className=" h-6 hover:bg-red-900  bg-red-400 text-white font-bold py-2 px-4 rounded mt-8"
            >
              Contactez-moi
            </a> */}
          </div>
        </section>
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-600 w-full rounded-3xl ">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="course" className="text-3xl font-bold mb-8">
              Parcours
            </h2>

            <div className="flex flex-col space-y-8 shadow-neutral-800-60 dark:shadow-neutral-800-50">
              <motion.div
                className=" bg-white dark:bg-gray-400 p-6 rounded-lg drop-shadow-2xl"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold dark:text-gray-800">
                  Développeur web et web mobile (formation)
                </h3>
                <p className="text-neutral-600 pt-4 font-bold dark:text-gray-600">
                  Afpa - Chartres
                </p>
                <p className="mt-2 pb-2 text-orange-700">
                  Septembre 2024 - Juin 2025
                </p>
                <p className="mt-2 text-start">
                  Front-end : HTML, CSS, JavaScript, Sass, Bootstrap et
                  TailwindCSS.
                </p>
                <p className="mt-2 text-start">Back-end : PHP, SQL, NoSQL.</p>
                <p className="mt-2 text-start">
                  Développement de sites web réactifs et performants avec des
                  frameworks tels que ReactJS et Symfony.
                </p>
                <p className="mt-2 text-start">
                  Outil de versioning avec Git / Github.
                </p>
                <p className="mt-2 text-start">
                  Maquettage et prototypage de site avec Figma.
                </p>
              </motion.div>

              <p className=" mb-8 text-2xl  px-8 text-justify font-roboto">
                <QuoteComponentLeft />
                <img
                  className="w-12 h-12 mx-auto"
                  src="/image/icone_flag_france/icons8-drapeau-français-48.png"
                  alt=""
                />
                <TypographyH4 />
                <QuoteComponentRight />
              </p>

              <motion.div
                className=" bg-white dark:bg-gray-400 p-6 rounded-lg drop-shadow-2xl"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold dark:text-gray-800">
                  Responsable de travaux réseaux télécoms très haut débit
                </h3>
                <p className="text-gray-600 pt-4 font-bold dark:text-gray-600">
                  Ministère des Armées - Orléans
                </p>
                <p className="mt-2 pb-2 text-orange-700">
                  Septembre 2023 - Août 2024
                </p>
                <p className="mt-2 text-start">
                  Exploiter un cahier des charges d'un chantier réseaux
                  télécoms.
                </p>
                <p className="mt-2 text-start">
                  Assurer le bon déroulement des travaux télécoms dans le
                  respect des normes.
                </p>
                <p className="mt-2 text-start">
                  Réaliser la recette d'un chantier réseaux télécoms et
                  superviser les opérations de maintenance.
                </p>
              </motion.div>

              <motion.div
                className=" bg-white dark:bg-gray-400 p-6 rounded-lg drop-shadow-2xl"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold dark:text-gray-800">
                  Formateur concepteur pédagogique
                </h3>
                <p className="text-gray-600 pt-4 font-bold dark:text-gray-600">
                  Ministère des Armées - Rennes
                </p>
                <p className="mt-2 pb-2 text-orange-700">
                  Juillet 2015 - Août 2023
                </p>
                <p className="mt-2 text-start">
                  Préparer et concevoir une séquence de formation.
                </p>
                <p className="mt-2 text-start">
                  Animer et évaluer une séquence de formation.
                </p>
                <p className="mt-2 text-start">
                  Accompagner les apprenants et développer les compétences.
                </p>
              </motion.div>

              <motion.div
                className=" bg-white dark:bg-gray-400 p-6 rounded-lg drop-shadow-2xl"
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold dark:text-gray-800">
                  Chef d'équipe d'exploitation et de maintenance des systèmes
                  d'information et de télécommunications
                </h3>
                <p className="text-gray-600 pt-4 font-bold dark:text-gray-600">
                  Ministère des Armées - Laval / Strasbourg / Rennes
                </p>
                <p className="mt-2 pb-2 text-orange-700">
                  Juin 2004 - Juillet 2015
                </p>
                <p className="mt-2 text-start">
                  Assurer la conduite des systèmes d'information et de
                  communication.
                </p>
                <p className="mt-2 text-start">
                  Garantir la continuité de service des systèmes d'information,
                  de communication et des réseaux.
                </p>
                <p className="mt-2 text-start">Gestion de stock.</p>
                <p className="mt-2 text-start">Manager une équipe.</p>
              </motion.div>
            </div>
            <div className="flex mt-10 flex-col space-y-8 shadow-neutral-800-60 dark:shadow-neutral-800-50">
              <a
                href="/public/cv/CV B3 ENI- Stephen WebDev alternance 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:text-gray-800 hover:bg-gray-300 text-white font-bold py-2 px-4  rounded"
              >
                Charger mon CV
              </a>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 w-full">
          <div className="max-w-8xl mx-auto text-center">
            <h2 id="projects" className="text-3xl font-bold mb-12">
              Projets
            </h2>
            <p className=" mb-10 text-2xl px-8 text-justify font-roboto">
              <QuoteComponentLeft />
              <TypographyH5 />
              <QuoteComponentRight />
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center items-center align-middle bg-gray-200 dark:bg-gray-300 p-6 rounded-lg shadow-md cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full mx-auto flex mt-14 p-12 shadow-4xl  "
                  />
                  <div className="flex flex-col items-center m-10 justify-between h-auto">
                    <h3 className="text-gray-900 text-3xl pt-14 font-bold">
                      {project.title}
                    </h3>
                    <p className="text-white dark:text-gray-900 p-4 text-start mt-2">
                      {project.description}
                    </p>
                    <p className="text-neutral-900 m-1 mt-10 p-2 rounded-b-md bg-cyan-600 font-semibold text-start ">
                      {project.technologies}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="py-16 px-4 bg-gray-100 dark:bg-gray-700 w-full rounded-t-3xl"
        >
          <ContactForm />
        </section>
      </main>

      <footer
        id="contact"
        className="flex flex-col justify-evenly py-1 px-1 bg-gray-200 dark:bg-gray-900 text-center w-full"
      >
        <div className="mb-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 justify-items-center align-middle items-center">
          <a
            href="https://github.com/stephen-ins"
            className="text-gray-400 hover:text-white transition p-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Profil GitHub"
          >
            <i className="fab fa-github text-2xl text-gray m-4 transition-transform transform hover:scale-125"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-insixiengmay-bbb5b7269/"
            className="text-gray-400 hover:text-white transition p-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Profil LinkedIn"
          >
            <i className="fab fa-linkedin text-gray text-2xl m-4 transition-transform transform hover:scale-125"></i>
          </a>

          <a
            href="https://www.canva.com/design/DAGeQ6DsULM/OIQRUuX6klzDjCt8E_nC9g/view"
            className="text-gray-400 hover:text-white transition p-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Bannière Linkedin"
          >
            <i className="fas fa-paint-brush text-gray text-2xl m-4 transition-transform transform hover:scale-125"></i>
          </a>

          <a
            href="mailto:portfolio@stephen-ins.com"
            className="text-gray-400 hover:text-white transition p-2"
            target="_blank"
            rel="noopener noreferrer"
            title="Envoyer un email"
          >
            <i className="fas fa-envelope text-2xl text-gray m-4 transition-transform transform hover:scale-125"></i>
          </a>

          <a
            href="tel:+33651301562"
            className="text-gray-400 hover:text-white transition p-2"
            target="_blank"
            rel="noopener noreferrer"
            title="M'appeler au +33 (0)6 51 30 15 62"
          >
            <i className="fas fa-phone text-2xl text-gray m-4 transition-transform transform hover:scale-125"></i>
          </a>
        </div>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-2 text-white">
          &copy; {new Date().getFullYear()} - {"  "}
          <a
            href="https://portfolio.stephen-ins.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Vers mon portfolio Stephen Insixiengmay"
            className="text-blue-400 hover:text-blue-900 hover:border-l-black-900"
          >
            portfolio.stephen-ins.com
          </a>{" "}
          - Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default App;
