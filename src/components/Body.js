import React from "react";
import Card from "./Card";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Body(props) {
  return (
    <div>
      {props.section === "about" && <About />}

      {props.section === "portfolio" && <Projects />}

      {props.section === "contact" && <Contact />}

    </div>
  );
}
