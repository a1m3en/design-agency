import styled from 'styled-components';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = styled.section`
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    background: var(--gray);
    border-radius: 40px;
    padding: 2.9rem 3rem;
    margin: 2rem auto;
    max-width: 1350px;
    min-height: 650px;
`;

const HeroText = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Headline = styled.h1`
    font-size: 92px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 1.2rem;
    line-height: 1.08;
    font-family:  'Outfit', 'Outfit Placeholder', sans-serif;
    display: block;
    span {
        color: var(--primary);
        display: block;
        margin-top: 0.5rem;
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

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const Button1 = styled.button`
    background-color: var(--primary);
    color: var(--gray);
    font-family: inherit;
    border: none;
    border-radius: 30px;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(145,75,241,0.15);
    &:hover {
        background: var(--gray);
        color: var(--primary);
    }
`;

const Button2 = styled.button`
    background-color: var(--white);
    color: var(--gray);
    font-family: inherit;
    border: 2px solid var(--gray);
    border-radius: 30px;
    padding: 0.7rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover {
        background: var(--gray);
        color: var(--background);
    }
`;

const HeroImage = styled.img`
    height: 690px;
    width: 690px;
    object-fit: contain;
    margin-right: -75px;
`;

export default function Hero() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <HeroSection>
            <HeroText>
                <Headline data-aos="fade-up" data-aos-duration="800">
                    Your AI-Powered<span>Design </span>Assistant
                </Headline>
                <SubHeadline data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                    Unlock your creative potential. Seamlessly generate, customize
                    and perfect your designs with cutting-edge AI technology.
                </SubHeadline>
                <ButtonGroup>
                    <Button1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Get Started</Button1>
                    <Button2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">More Templates</Button2>
                </ButtonGroup>
            </HeroText>
            <HeroImage src="/bluur.png" alt="Hero" data-aos="fade-left" data-aos-duration="800" />
        </HeroSection>
    );
}