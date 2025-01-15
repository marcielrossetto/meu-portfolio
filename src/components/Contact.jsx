import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 40px;
  color: #503939;
  text-align: center;
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