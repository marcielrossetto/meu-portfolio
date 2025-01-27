import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 40px;
  color: #dbd9d9;
  text-align: center;
  background-color: #503939;
  width: 100%;
  height: 100px;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contato</h2>
      <p>Email: rossettoTI@rossettoTi.com.br</p>
    </ContactSection>
  );
};

export default Contact;