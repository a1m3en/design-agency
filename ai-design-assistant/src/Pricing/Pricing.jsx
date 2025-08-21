import styled from "styled-components";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  background: var(--background);
  padding: 4rem 0 0 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6rem;
  margin-bottom: 2.5rem;
`;

const Headline = styled.h1`
  font-size: 7.2rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 1.2rem;
  font-family: 'Outfit', sans-serif;
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

const SwitchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const SwitchLabel = styled.span`
  color: ${props => props.active ? "var(--white)" : "var(--gray)"};
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  margin: 0 0.7rem 0 0;
  font-weight: 500;
  transition: color 0.2s;
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Toggle = styled.button`
  width: 70px;
  height: 32px;
  background: var(--primary);
  border-radius: 20px;
  border: none;
  position: relative;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  transition: background 0.2s;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 4px;
  left: ${props => props.yearly ? "38px" : "4px"};
  width: 24px;
  height: 24px;
  background: var(--white);
  border-radius: 50%;
  transition: left 0.2s;
`;

const ToggleText = styled.span`
  color: ${props => props.active ? "var(--white)" : "var(--gray)"};
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  margin-left: ${props => props.active ? "12px" : "0"};
  font-weight: 500;
  transition: color 0.2s;
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.5rem;
  align-items: stretch;
  position: relative;
`;

const Card = styled.div`
  background: #232223;
  border-radius: 2rem;
  padding: 2.5rem 2rem 2rem 2rem;
  min-width: 320px;
  max-width: 350px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.08);
  border: ${props => props.active ? "2px solid var(--primary)" : "none"};
  position: relative;
  flex: 1;
  justify-content: flex-start;
  height: 100%;
`;

const CardTitle = styled.span`
  font-size: 1rem;
  color: var(--gray);
  font-family: "Poppins", sans-serif;
  margin-bottom: 0.7rem;
`;

const CardPrice = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: ${props => props.active ? "var(--primary)" : "var(--white)"};
`;

const CardSub = styled.span`
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 1.2rem;
`;

const CardDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #444;
  margin: 1.2rem 0;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  width: 100%;
  flex: 1 1 auto;
`;

const CardListItem = styled.li`
  font-size: 1.05rem;
  font-family: "Poppins", sans-serif;
  color: var(--white);
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  &:before {
    content: "○";
    color: ${props => props.active ? "var(--primary)" : "var(--gray)"};
    font-size: 1.1rem;
    margin-right: 0.7rem;
  }
`;

const CardButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
`;

const CardButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  border-radius: 1rem;
  border: 1.5px solid var(--primary);
  background: ${props => props.active ? "var(--primary)" : "transparent"};
  color: ${props => props.active ? "var(--white)" : "var(--primary)"};
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  margin-top: auto;
  margin-bottom: 0.5rem;
`;

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Example prices for toggle
  const prices = yearly
    ? { free: "$0/m", basic: "$11.93/m", pro: "$24.93/m", sub: "Billed Yearly" }
    : { free: "$0/m", basic: "$14.99/m", pro: "$29.99/m", sub: "Billed Monthly" };

  return (
    <Container data-aos="fade-up">
      <Header data-aos="fade-right" data-aos-delay="100">
        <Headline>
          Affordable Plans for<br/> <span>Every Need</span>
        </Headline>
        <SubHeadline>
          Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant.
        </SubHeadline>
        <SwitchRow data-aos="fade-up" data-aos-delay="200">
          <ToggleWrapper>
            <SwitchLabel active={!yearly}>Monthly</SwitchLabel>
            <Toggle onClick={() => setYearly(!yearly)} aria-label="Toggle billing period">
              <ToggleCircle yearly={yearly} />
            </Toggle>
            <ToggleText active={yearly}>Yearly</ToggleText>
          </ToggleWrapper>
        </SwitchRow>
      </Header>
      <CardsRow>
        <Card data-aos="zoom-in" data-aos-delay="300">
          <CardTitle>FREE</CardTitle>
          <CardPrice>{prices.free}</CardPrice>
          <CardSub>Free forever</CardSub>
          <CardDivider />
          <CardList>
            <CardListItem>Basic AI-generated designs</CardListItem>
            <CardListItem>Access to customization tools</CardListItem>
            <CardListItem>Standard templates library</CardListItem>
            <CardListItem>5 projects per month</CardListItem>
          </CardList>
          <CardButton>Remix Template</CardButton>
        </Card>
        <Card active data-aos="zoom-in" data-aos-delay="400">
          <CardTitle>BASIC</CardTitle>
          <CardPrice active>{prices.basic}</CardPrice>
          <CardSub>{prices.sub}</CardSub>
          <CardDivider />
          <CardList>
            <CardListItem active>Advanced AI-generated designs</CardListItem>
            <CardListItem active>Full access to customization tools</CardListItem>
            <CardListItem active>Premium templates library</CardListItem>
            <CardListItem active>Unlimited projects</CardListItem>
            <CardListItem active>Real-time collaboration</CardListItem>
            <CardListItem active>Priority email support</CardListItem>
          </CardList>
          <CardButton active>Remix Template</CardButton>
        </Card>
        <Card data-aos="zoom-in" data-aos-delay="500">
          <CardTitle>PRO</CardTitle>
          <CardPrice>{prices.pro}</CardPrice>
          <CardSub>{prices.sub}</CardSub>
          <CardDivider />
          <CardList>
            <CardListItem>All features included in Pro Plan</CardListItem>
            <CardListItem>Dedicated account manager</CardListItem>
            <CardListItem>Custom AI solutions and designs</CardListItem>
            <CardListItem>Onboarding and training sessions</CardListItem>
            <CardListItem>24/7 priority support</CardListItem>
            <CardListItem>Advanced analytics and reporting</CardListItem>
            <CardListItem>Secure cloud storage</CardListItem>
          </CardList>
          <CardButton>Remix Template</CardButton>
        </Card>
      </CardsRow>
    </Container>
  );
}