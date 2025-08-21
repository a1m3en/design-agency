import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterSection = styled.footer`
  background: var(--gray);
  border-radius: 0 0 16px 16px;
  padding: 6rem 0 9rem 0;
  margin-top: 2rem;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LogoNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const HexIcon = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: none;
  border-radius: 6px;
  border: 2.5px solid #fff;
  box-sizing: border-box;
  position: relative;
  margin-right: 0.2rem;
  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 7px;
    border: 2px solid #8b6fff;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.2rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #8b6fff;
    }
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const FreeBtn = styled.a`
  background: #8b6fff;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(139, 111, 255, 0.12);
  transition: background 0.2s;
  &:hover {
    background: #6a4ee6;
  }
`;

const TemplatesBtn = styled.a`
  background: #222;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  margin-left: 0.5rem;
  &:hover {
    background: #333;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 2.2rem 0 1.2rem 0;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.1rem;
  color: #bdbdbd;
`;

const LeftText = styled.div`
  font-size: 1.1rem;
`;

const RightLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color: #bdbdbd;
    text-decoration: none;
    &:hover {
      color: #8b6fff;
    }
  }
`;

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <FooterSection data-aos="fade-up">
      <Container>
        <TopRow data-aos="fade-down" data-aos-delay="100">
          <LogoNav>
            <Logo data-aos="fade-right" data-aos-delay="200">
              <HexIcon />
              NajmAI
            </Logo>
            <Nav data-aos="fade-right" data-aos-delay="300">
              <a href="#how">How it Works</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#blog">Blog</a>
              <a href="#faqs">Faqs</a>
              <a href="#contact">Contact</a>
            </Nav>
          </LogoNav>
          <ButtonRow data-aos="fade-left" data-aos-delay="400">
            <FreeBtn href="#">Use for FREE</FreeBtn>
            <TemplatesBtn href="#">More Templates</TemplatesBtn>
          </ButtonRow>
        </TopRow>
        <Divider />
        <BottomRow>
          <LeftText>Made by Templyo | Powered by Framer</LeftText>
          <RightLinks>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Condition</a>
          </RightLinks>
        </BottomRow>
      </Container>
    </FooterSection>
  );
}