import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section<{ bgColor: string }>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  padding: 40px 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #c9d1d9;
  text-align: center;
  max-width: 600px;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0d1117;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #58a6ff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #1f6feb;
  }
`;

const Button = styled.a`
  text-decoration: none;
  background-color: #58a6ff;
  color: #fff;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #1f6feb;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <NavBar>
        <NavLink href="#sobre-mim">Sobre Mim</NavLink>
        <NavLink href="#projetos">Projetos</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </NavBar>

      <Section id="sobre-mim" bgColor="#0d1117">
        <Title>Sobre Mim</Title>
        <Subtitle>
          Olá! Sou um desenvolvedor frontend apaixonado por criar interfaces elegantes e funcionais.
          Tenho experiência em React, TypeScript e design de UI.
        </Subtitle>
      </Section>

      <Section id="projetos" bgColor="#161b22">
        <Title>Projetos</Title>
        <Subtitle>
          Aqui estão alguns dos projetos que desenvolvi recentemente.
        </Subtitle>
        <Button href="#contato">Entre em contato para mais detalhes!</Button>
      </Section>

      <Section id="contato" bgColor="#0d1117">
        <Title>Contato</Title>
        <Subtitle>
          Gostou do que viu? Entre em contato comigo através de um dos meios abaixo.
        </Subtitle>
        <Button href="mailto:seuemail@exemplo.com">Enviar E-mail</Button>
      </Section>
    </Container>
  );
};

export default App;
