import React, { Fragment } from "react";

export function About() {
  return (
    <Fragment>
      <div className="hero">
        <h1>Hi, my name is Reinis Rozensteins</h1>
        <div className="keywords">
          <span>Developer</span>
          <span>Enthusiast</span>
          <span>Learner</span>
        </div>
      </div>
      <div className="about">
        <p>
          A Javascript developer mainly working with React applications and
          everything in and around Javascript ecosystem. Building everything
          from static websites to full fledged applications with registration,
          payment options, messaging and other microservices. I deal with api
          implementing, state updates, data persistence, load optimizations,
          design implementation, design frameworks, hosting and more.
        </p>
        <p>
          I am a big proponent of continuous learning and if I encounter
          something I am not familiar with, I believe I can learn it and apply
          it in my personal and/or professional life. To up my skills in problem
          solving, strategic skills and creativity, I do math problems on
          www.projecteuler.net or try solving chess puzzles. Both of those
          things let me stay humble and serve me as a reminder that noone knows
          everything and I can always work on improving myself!
        </p>
        {/* <p>
          History. A brief summary of my past. I was born in Cesis, Latvia,
          where I lived the first 7 years of my life. I like to think about
          those times as pre-technology period of my life. All I did was run
          around the yard and play with sticks with neighbourhood kids.
        </p> */}
        <p>
          School years were a very busy time for me, as I was very focused on
          competitive swimming throughout middle school, high school and
          college. I was very passionate, dedicated and ambitious about it.
          Swimming thaught me about goal-setting, achieving the set out goals,
          creating and following through with plans. It thaught me not to
          compare myself with others but with who I was yesterday!
        </p>
      </div>
    </Fragment>
  );
}

export default About;
