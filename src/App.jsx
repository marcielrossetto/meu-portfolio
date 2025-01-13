import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
