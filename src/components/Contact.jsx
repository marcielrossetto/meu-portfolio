import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 40px;
  background-color: #0077ff;
  color: #fff;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactSection>
      <h2>Contato</h2>
      <p>Email: meuemail@exemplo.com</p>
    </ContactSection>
  );
};

export default Contact;