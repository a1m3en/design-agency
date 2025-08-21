import styled from "styled-components";
import { FaUpload, FaMagic, FaRocket } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  margin-top:5.9rem;
  width: 100vw;
  padding: 2rem 0 0 0;
  background: var(--background);
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2.5rem;
  margin-left: 9.9rem;
`;

const Headline = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1rem;
  font-family: 'Outfit', sans-serif;
  text-align: left;
  width: 100%;
  span {
    color: var(--primary);
  }
`;

const SubHeadline = styled.p`
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

const CardsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: stretch;
  margin-top: 1.5rem;
`;

const Card = styled.div`
  background: var(--gray);
  border-radius: 28px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 2.2rem 2rem 2rem 2rem;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardIcon = styled.div`
  background: var(--primary);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  svg {
    color: var(--white);
    font-size: 2rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 0.7rem;
  font-family: 'Outfit', sans-serif;
`;

const CardDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0;
`;

export default function Features() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Section data-aos="fade-up">
      <Centered data-aos="fade-right" data-aos-delay="100">
        <Headline>
          Unleash Your<br/> <span>Creativity</span>
        </Headline>
        <SubHeadline>
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning <br/> designs effortlessly.Follow these simple steps to turn your vision into reality.
        </SubHeadline>
      </Centered>
      <CardsRow>
        <Card data-aos="zoom-in" data-aos-delay="200">
          <CardIcon><FaUpload /></CardIcon>
          <CardTitle>Upload Brief</CardTitle>
          <CardDesc>Share your project details and let our AI grasp your vision.</CardDesc>
        </Card>
        <Card data-aos="zoom-in" data-aos-delay="350">
          <CardIcon><FaMagic /></CardIcon>
          <CardTitle>Generate Designs</CardTitle>
          <CardDesc>Watch as our AI crafts unique design ideas tailored to you.</CardDesc>
        </Card>
        <Card data-aos="zoom-in" data-aos-delay="500">
          <CardIcon><FaRocket /></CardIcon>
          <CardTitle>Refine Creation</CardTitle>
          <CardDesc>Perfect your chosen concept with easy-to-use AI tools.</CardDesc>
        </Card>
      </CardsRow>
    </Section>
  );
}