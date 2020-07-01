import React, { useState } from "react";
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
export let Project = ({ project }) => {
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
