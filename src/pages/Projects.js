import React, { useState, Fragment } from "react";

const project1 = {
  name: "Metric/Imp Converter",
  link: "https://early-baseball.glitch.me/",
  glitch: "https://edit/#!/early-baseball.glitch.me/",
  screenshot: "/screenshots/screenshot_MetricImpConverter.png",
  about: "Simple node metric-imperial converter API with a front-end",
  technologies: ["javascript", "css", "html", "node", "jquery"],
};

const project3 = {
  name: "Issue tracker",
  screenshot: "/screenshots/screenshot_Issuetracker.png",
  link: "https://righteous-otter.glitch.me/apitest/",
  github: "https://github.com/reinitto/issue_tracker",
  about:
    "Tracks added issues. Ability to add/delete/mark_complete issues under specified project name. Create new collection if project doesn't exist. Saves data in mongoDB",
  technologies: [
    "vanilla",
    "javascript",
    "jQuery",
    "css",
    "scss",
    "html",
    "node",
    "express",
    "cors",
    "mongodb",
    "mongoose",
    "mocha",
    "chai",
  ],
};
const project4 = {
  name: "Exercise tracker",
  screenshot: "/screenshots/screenshot_Exercisetracker.png",
  link: "https://auspicious-sight.glitch.me/",
  glitch: "https://edit/#!/auspicious-sight.glitch.me/",
  about:
    "Another logging system with MongoDB. Has the ability to create users, add user exercises with date, duration and time. Check all assigned exercisese to user. Uses MVC design pattern.",
  technologies: [
    "vanilla",
    "javascript",
    "jQuery",
    "css",
    "scss",
    "html",
    "node",
    "express",
    "cors",
    "mongodb",
    "mongoose",
    "mocha",
    "chai",
    "MVC",
  ],
};

const project5 = {
  name: "Anonymous message board",
  screenshot: "/screenshots/screenshot_Anonymousmessageboard.png",
  link: "https://rough-snipe.glitch.me/",
  github: "https://github.com/reinitto/anon-message",

  about:
    "Anonymous message board with abilities to create boards, threads, add/delete comemnts to threads,report threads and comments, add replies to comments. Uses a RESTful API to communicate with mongoDB.",
  technologies: [
    "vanilla",
    "javascript",
    "jquery",
    "rest",
    "api",
    "MVC",
    "css",
    "scss",
    "html",
    "node",
    "express",
    "cors",
    "helmet",
    "mongodb",
    "mongoose",
    "mocha",
    "chai",
  ],
};
const project6 = {
  name: "Githuhb Profile Finder",
  screenshot: "/screenshots/screenshot_GithuhbProfileFinder.png",
  link: "https://agitated-jang-fc6861.netlify.app/",
  github: "https://github.com/reinitto/github_finder",
  about: "App that searches for matching github usernnames",
  technologies: [
    "React",
    "javascript",
    "scss",
    "html",
    "axios",
    "dotenv",
    "netlify",
  ],
};
const project7 = {
  name: "IT Logger",
  screenshot: "/screenshots/screenshot_ITLogger.png",
  link: "https://reinitto-it-logger.glitch.me/",
  github: "https://github.com/reinitto/it-logger",
  about:
    "Logs Tickets. RESTful ticketing system. Add/remove/mark tickets. Add/remove/create/delete/assign engineers.",
  technologies: [
    "React",
    "Redux",
    "javascript",
    "express",
    "node",
    "scss",
    "moment",
    "mongoose",
    "mongoDB",
    "mateiralizeCSS",
    "rest",
    "api",
    "MVC",
    "nodemon",
    "concurrently",
    "json-server",
  ],
};
const project8 = {
  name: "Contact keeper",
  screenshot: "/screenshots/screenshot_Contactkeeper.png",
  link: "https://peppered-sudden-circle.glitch.me/",
  github: "https://github.com/reinitto/contact_keeper",
  about:
    "Contact manager App. Includes Registration, Login, Authorized routes, adding/deleting contacts. Utilizess bcrypt for password hashing, jsonwebtoken for authorization purposes.",
  technologies: [
    "React",
    "javascript",
    "express",
    "node",
    "scss",
    "bcryptjs",
    "jsonwebtoken",
    "mongoose",
    "mongoDB",
    "rest",
    "api",
    "MVC",
    "nodemon",
    "concurrently",
  ],
};

const project9 = {
  name: "Quiz Builder",
  screenshot: "/screenshots/screenshot_quizBuilder.jpg",
  link: "https://rounded-shorthaired-crystal.glitch.me/",
  github: "https://github.com/reinitto/quiz_builder",
  about:
    "Quiz builder App. Allows user to create quizzes and share them with friends. Implements redux state management",
  technologies: [
    "React",
    "Redux",
    "javascript",
    "express",
    "node",
    "mongoose",
    "mongoDB",
    "rest",
    "api",
    "MVC",
  ],
};
const project10 = {
  name: "Quote machine",
  screenshot: "/screenshots/screenshot_Quotemachine.png",
  link: "https://reinitto-didactic-octo-waddle.glitch.me/",
  github: "https://github.com/reinitto/didactic-octo-waddle",
  about: "Generates quotes. Has ability to tweet them.",
  technologies: ["javascript", "express", "node"],
};
const project11 = {
  name: "notUber",
  screenshot: "/screenshots/screenshot_notUber.png",
  link: "https://harsh-purple-stoat.glitch.me/",
  github: "https://github.com/reinitto/50_cent",
  about:
    "Uber-like frontend with integrated google maps,directions,places. Allows to look up the estimated price, time for the entered trip. Autocompletes search. Calculates a surcharge during more busy times(based on personal assumptions). Dark mode turns on after 5pm.",
  technologies: ["javascript", "express", "node"],
};
const project12 = {
  name: "Platformer level",
  screenshot: "/screenshots/screenshot_Platformerlevel.png",
  link: "https://epic-jones-453e59.netlify.app/",
  github: "https://github.com/reinitto/platformer2",
  about: "One weekends attempt at learning MelonJS platformer game.",
  technologies: [
    "javascript",
    "electron",
    "node",
    "melonJS",
    "grunt",
    "Tiled Map Editor",
  ],
};
const project13 = {
  name: "Crypto Sim",
  screenshot: "/screenshots/screenshot_CryptoSim.png",
  link: "https://cryptosim.ew.r.appspot.com/",
  github: "https://github.com/reinitto/crypto_sim",
  about:
    "React/Redux simulation game involving buying and selling cryptocurrencies.",
  technologies: [
    "javascript",
    "React",
    "node",
    "Redux",
    "express",
    "mongoose",
    "mongoDB",
    "rest",
    "api",
    "google cloud",
    "google engine app",
    "bcryptjs",
    "axios",
    "jest-enzyme",
    "cryptocurrencies",
    "materializeCSS",
    "reducers",
    "actions",
    "testing",
    "models",
    "MVC",
  ],
};

const project14 = {
  name: "Gallery builder",
  screenshot: "/screenshots/screenshot_Gallerybuilder.png",
  link: "https://reinitto-picshare.glitch.me/",
  github: "https://github.com/reinitto/picshare",
  about:
    "Node app with integrated Cloudinary, MongoDB and other apis. Has the ability to store  image albums online and share with friends.",
  technologies: [
    "cloudinary",
    "javascript",
    "express",
    "node",
    "mongoose",
    "mongoDB",
    "models",
    "multer",
    "api",
    "ejs",
    "babel",
  ],
};
const project15 = {
  name: "Photographer website",
  screenshot: "/screenshots/screenshot_Photographerwebsite.png",
  link: "https://capturepuremoments.no/",
  github: "https://github.com/reinitto/sunshine_photography",
  about:
    "A firebase app. Website project with admin functionality. Has authentication with different roles admin/user, admin panel that allows admin to add/remove content, integrated cloud firestore and realtime database, cloud functions. ",
  technologies: [
    "cloudinary",
    "javascript",
    "react",
    "firebase",
    "cloud functions",
    "bootstrap",
    "lazy loading",
    "progressive loading",
    "scss",
    "webpack",
    "babel",
    "code splitting",
    "responsive design",
  ],
};

const projects = [
  project1,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
];
function get_tex_size(txt, font) {
  let element = document.createElement("canvas");
  let context = element.getContext("2d");
  context.font = font;
  var tsize = {
    width: context.measureText(txt).width,
    height: parseInt(context.font),
  };
  return tsize;
}

let Project = ({ project }) => {
  let [hidden, setHidden] = useState(true);
  let { name, about, technologies, screenshot, link, github, glitch } = project;
  var aboutSize = get_tex_size(about, "16px Times New Roman");
  var techSize = get_tex_size(technologies.join(" "), "30px Times New Roman");
  let aboutheight = Math.ceil(aboutSize.width / 250) * 22 + 32;
  let techHeight = Math.ceil(techSize.width / 250) * 32;
  return (
    <div className="project" key={name}>
      <h4>{name}</h4>
      <img
        src={process.env.PUBLIC_URL + screenshot}
        alt=""
        width={250}
        height={187.5}
        loading="lazy"
      />
      <div className="links">
        <a
          className="project-links"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          Website
        </a>
        <hr
          style={{
            margin: 0,
            padding: 0,
            width: "1px",
            border: "none",
          }}
        />
        <a
          className="project-links"
          rel="noopener noreferrer"
          target="_blank"
          href={github || glitch}
        >
          {github ? "Github" : "Glitch"}
        </a>
      </div>
      <div
        className={hidden ? "hidden" : "show"}
        style={{
          height: !hidden ? `${aboutheight + techHeight + 40}px` : 0,
        }}
      >
        <h6>About</h6>
        <p>{about}</p>
        <h6>Main technologies</h6>
        <p className="techs-container">
          {technologies.map((tech, i) => (
            <span className="tech" key={tech + name + i}>
              {tech.slice(0, 1).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </p>
      </div>

      <button className="toggle-desc" onClick={() => setHidden(!hidden)}>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              margin: "0 auto",
              fontSize: "30px",
            }}
          >
            {hidden ? " >" : " <"}
          </span>
          <span> {hidden ? "More" : "Less"} Info</span>
          <span
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              margin: "0 auto",
              fontSize: "30px",
            }}
          >
            {hidden ? " >" : " <"}
          </span>
        </p>
      </button>
    </div>
  );
};

export function Projects() {
  return (
    <Fragment>
      <h2>My Projects</h2>
      <div className="projects">
        {projects.reverse().map((project, i) => {
          return <Project key={project.name + i} project={project} />;
        })}
      </div>
    </Fragment>
  );
}

export default Projects;
