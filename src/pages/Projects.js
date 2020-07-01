import React, { Fragment } from "react";
import { Project } from "../components/Project";
import projects from "../content/projects.json";

export function Projects() {
  return (
    <Fragment>
      <h2>My Projects</h2>

      <div className="projects">
        {Object.keys(projects).map((key, i) => {
          return (
            <Project key={projects[key].name + i} project={projects[key]} />
          );
        })}
      </div>
    </Fragment>
  );
}

export default Projects;
