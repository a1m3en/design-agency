import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaApple, FaGoogle, FaMicrosoft, FaAmazon } from 'react-icons/fa';

const Bar = styled.div`
  background: var(--background);
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  border-radius: 0;
`;

const LogosRow = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LogoIcon = styled.div`
  font-size: 3.5rem;
  color: var(--white);
  opacity: 0.85;
  transition: color 0.2s;
  &:hover {
    color: var(--primary);
  }
`;

export default function SponsorsBar() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Bar data-aos="fade-up">
      <LogosRow>
        <LogoIcon data-aos="fade-up" data-aos-delay="100"><FaReact /></LogoIcon>
        <LogoIcon data-aos="fade-up" data-aos-delay="200"><FaApple /></LogoIcon>
        <LogoIcon data-aos="fade-up" data-aos-delay="300"><FaGoogle /></LogoIcon>
        <LogoIcon data-aos="fade-up" data-aos-delay="400"><FaMicrosoft /></LogoIcon>
        <LogoIcon data-aos="fade-up" data-aos-delay="500"><FaAmazon /></LogoIcon>
      </LogosRow>
    </Bar>
  );
}
