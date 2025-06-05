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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
  color: #a0a0a0;
`;

const GearIcon = styled.div`
  font-size: 4rem;
  margin: 2rem 0;
  animation: ${rotate} 4s linear infinite;
  color: #4ecdc4;
`;

const ResumeLink = styled.a`
  color: #4ecdc4;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #4ecdc4;
  border-radius: 25px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
  
  &:hover {
    background: #4ecdc4;
    color: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const UnderConstruction: React.FC = () => {
  return (
    <Container>
      <Title>Under Construction</Title>
      <Subtitle>I'm working hard to bring you something amazing!</Subtitle>
      <GearIcon>⚙️</GearIcon>
      <Subtitle>In the meantime, feel free to check out my resume</Subtitle>
      <ResumeLink
        href="https://drive.google.com/file/d/1rrtDWUJtYzcXf2Y9jqiiKoFCAbwwtyku/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </ResumeLink>
    </Container>
  );
};

export default UnderConstruction; 