import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #0077ff;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Meu Portfólio</h1>
      <p>Desenvolvedor Web | React | Vite</p>
    </HeaderContainer>
  );
};

export default Header;