import React, { useState, useEffect, useRef } from "react";

export let Project = ({ project }) => {
  let [data, setData] = useState(project);
  let [screenshot, setScreenshot] = useState();
  let [hidden, setHidden] = useState(true);
  let projectRef = useRef();
  useEffect(() => {
    setData({
      ...project,
    });
  }, [project]);
  useEffect(() => {
    let options = {
      threshold: 0.25,
    };
    let currRef = projectRef.current;
    let observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          setScreenshot(process.env.PUBLIC_URL + project.screenshot);
        }
      }
    }, options);
    observer.observe(currRef);

    return () => {
      observer.unobserve(currRef);
    };
  });
  let { name, about, technologies, link, github, glitch } = data;
  return (
    <div ref={projectRef} className="project" key={name}>
      <h4>{name}</h4>
      <img src={screenshot} alt="" width={250} height={187.5} loading="lazy" />
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
      <div className={hidden ? "hidden" : "show"}>
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
