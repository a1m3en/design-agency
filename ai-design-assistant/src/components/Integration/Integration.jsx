import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const IntegrationSection = styled.section`
  background: var(--gray);
  border-radius: 32px;
  max-width: 1400px;
  margin: 13rem auto; 
  padding: 5.5rem 3rem 7.5rem 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;

const Left = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntegrationHeadline = styled.h1`
  font-size: 4.7rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1.2rem;
  font-family: 'Outfit', sans-serif;
  span {
    color: var(--primary);
  }
`;

const IntegrationDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;          
  font-weight: 900;            
  line-height: 1.5;            
  color: #8a8888ff;              
  text-align: left;
  margin: 0 0 1.5rem 0;        
  padding: 0;
  letter-spacing: 0.01em;
`;

const IconsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 2.2rem;
  justify-items: center;
  align-items: center;
`;

const IconCircle = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export default function Integration() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <IntegrationSection data-aos="fade-up">
      <Left data-aos="fade-right" data-aos-delay="100">
        <IntegrationHeadline>
          Seamless Tool<br />
          <span>Integration</span>
        </IntegrationHeadline>
        <IntegrationDesc>
          NajmAI offers seamless integration with a variety of popular design and project management tools, ensuring a smooth and efficient workflow.
        </IntegrationDesc>
      </Left>
      <IconsGrid data-aos="fade-left" data-aos-delay="200">
        {/* Replace these with actual SVG/PNG paths */}
        <IconCircle><IconImg src="/icons/tool1.svg" alt="Tool 1" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool2.svg" alt="Tool 2" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool3.svg" alt="Tool 3" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool4.svg" alt="Tool 4" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool5.svg" alt="Tool 5" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool6.svg" alt="Tool 6" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool7.svg" alt="Tool 7" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool8.svg" alt="Tool 8" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool9.svg" alt="Tool 9" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool10.svg" alt="Tool 10" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool11.svg" alt="Tool 11" /></IconCircle>
        <IconCircle><IconImg src="/icons/tool12.svg" alt="Tool 12" /></IconCircle>
      </IconsGrid>
    </IntegrationSection>
  );
}
