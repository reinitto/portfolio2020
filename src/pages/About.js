import React, { Fragment, useState } from "react";
import { ExternalButton } from "../components/ExternalButton";

const sections = {
  Developer: `A Javascript developer mainly working with React applications and
  everything in and around Javascript ecosystem. Building everything
  from static websites to full fledged applications with
  registration, payment options, messaging and other microservices.
  I deal with api implementing, state updates, data persistence,
  load optimizations, design implementation, design frameworks,
  hosting and more.`,
  Enthusiast: `I am a big proponent of continuous learning and if I encounter
  something I am not familiar with, I believe I can learn it and apply
  it in my personal and/or professional life. To increase my skills in
  problem solving, strategic skills and creativity, I do math problems
  on www.projecteuler.net, hackerrank.com or try solving chess puzzles. All of those
  things let me stay humble and serve me as a reminder that the only way to get better at somthing is by practicing it more and that noone
  knows everything and I can always work on improving myself!`,
  Learner: `School years were a very busy time for me, as I was very focused on
  competitive swimming throughout middle school, high school and
  college. I was very passionate, dedicated and ambitious about it.
  Swimming thaught me about goal-setting, achieving the set out goals,
  creating and following through with plans. It thaught me to compare myself only with who I was yesterday and not other people!`,
};

const Section = ({ title, text, onClick, active }) => {
  return (
    <div>
      <button
        className={`nav-item ${active === title ? "selected" : ""}`}
        onClick={() => onClick(title, text)}
      >
        <h3>{title}</h3>
      </button>
    </div>
  );
};

export function About() {
  let [text, setText] = useState(sections["Developer"]);
  let [active, setActive] = useState("Developer");
  let onClick = (active, text) => {
    let tD = document.querySelector(".text-display");
    tD.style.display = "none";
    tD.classList.remove("text-display");
    setActive(active);
    setText(text);
    setTimeout(() => {
      tD.classList.add("text-display");
      tD.style.display = "block";
    }, 10);
  };

  const buttons = Object.keys(sections).map((key) => (
    <Section
      key={key}
      title={key}
      text={sections[key]}
      onClick={onClick}
      active={active}
    />
  ));
  return (
    <Fragment>
      <div className="about-page">
        <div className="hero">
          <div className="hero-content">
            <h1>Hi, I'm Reinis Rozensteins</h1>
          </div>
        </div>

        <div className="about">{buttons}</div>
        <div className="text-container">
          <div className="text-display">{text}</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ExternalButton link="/reinis_rozensteins_cv.pdf" text="CV" />
        </div>
      </div>
    </Fragment>
  );
}

export default About;
