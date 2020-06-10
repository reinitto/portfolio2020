import React, { Fragment, useState } from "react";

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
  it in my personal and/or professional life. To up my skills in
  problem solving, strategic skills and creativity, I do math problems
  on www.projecteuler.net or try solving chess puzzles. Both of those
  things let me stay humble and serve me as a reminder that noone
  knows everything and I can always work on improving myself!`,
  Learner: `School years were a very busy time for me, as I was very focused on
  competitive swimming throughout middle school, high school and
  college. I was very passionate, dedicated and ambitious about it.
  Swimming thaught me about goal-setting, achieving the set out goals,
  creating and following through with plans. It thaught me not to
  compare myself with others but with who I was yesterday!`,
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
    setActive(active);
    setText(text);
  };
  const content = Object.keys(sections).map((key) => (
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
            {/* <div className="keywords">
              <span>Developer</span>
              <span>Enthusiast</span>
              <span>Learner</span>
            </div> */}
          </div>
        </div>
        <div className="about">{content}</div>
        <div className="text-display">{text}</div>
      </div>
    </Fragment>
  );
}

export default About;
