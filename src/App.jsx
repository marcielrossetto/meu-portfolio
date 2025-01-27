import React from "react";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Definição do AppContainer
const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Garante que ocupa toda a altura da janela */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px; /* Ajuste de espaçamento nas laterais em telas pequenas */
  box-sizing: border-box;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <About />
        <Projects />
        <Contact />
      </AppContainer>
    </>
  );
}

export default App;
