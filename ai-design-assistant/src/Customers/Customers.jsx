import { FaUser, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  margin-top: 5.9rem;
  margin-bottom: 4rem;
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
  margin-left: 6rem;
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

const NavRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-right: 6rem;
  margin-bottom: 1rem;
`;

const ArrowBtn = styled.button`
  background: var(--primary);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: var(--primary-dark, #6c63ff);
  }
`;

const CardsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;
`;

const Card = styled.div`
  background: var(--gray);
  border-radius: 28px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  width: 480px;
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const CardImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.5rem;
  background: var(--primary);
`;

const CardName = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--white);
  margin: 0;
  text-align: left;
`;

const CardDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--white);
  margin-bottom: 0;
  margin-top: 0.7rem;
  line-height: 1.6;
  text-align: left;
`;

const customersData = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John D.",
    desc: "Using this AI-powered design assistant has completely transformed the way I approach my projects. It’s like having a professional designer on call 24/7. Highly recommend it!"
  },
  {
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Michael S.",
    desc: "The design suggestions are spot on and the automated features save me so much time. I can focus more on creativity rather than getting bogged down in details."
  },
  {
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "David L.",
    desc: "This tool is a game-changer! It’s incredibly intuitive and the results are always impressive. I can’t imagine working without it now."
  },
  {
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sarah K.",
    desc: "I was skeptical at first, but this assistant exceeded all my expectations. It's easy to use and delivers beautiful designs effortlessly."
  },
  {
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Emily R.",
    desc: "The platform blends creativity and efficiency. It's a must-have for anyone looking to streamline their design workflow and produce top-notch work."
  },
  {
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Alex P.",
    desc: "Fantastic experience! The assistant helped me deliver projects faster and with better quality than ever before."
  },
  {
    img: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Linda M.",
    desc: "I love how easy it is to use. The suggestions are always relevant and save me hours every week."
  },
  {
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Chris T.",
    desc: "A must-have tool for any designer. It’s like having an extra team member who never sleeps!"
  },
  {
    img: "https://randomuser.me/api/portraits/women/41.jpg",
    name: "Jessica F.",
    desc: "The AI assistant is intuitive and powerful. My workflow has never been smoother."
  },
  {
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    name: "Mark W.",
    desc: "I recommend this to all my colleagues. It’s reliable, fast, and always delivers great results."
  }
];

export default function Customers() {
  const cardsRowRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const scrollAmount = 400; // px to scroll per click

  const handleScrollLeft = () => {
    if (cardsRowRef.current) {
      cardsRowRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (cardsRowRef.current) {
      cardsRowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return(
    <Section data-aos="fade-up">
      <Centered data-aos="fade-right" data-aos-delay="100">
        <Headline>
          Customer<span> Success</span> Stories
        </Headline>
        <SubHeadline>
          Discover how our platform has helped businesses create outstanding content effortlessly. <br/> Hear directly from our users about their success and satisfaction.
        </SubHeadline>
      </Centered>
      <NavRow data-aos="fade-left" data-aos-delay="200">
        <ArrowBtn onClick={handleScrollLeft}>
          <FaArrowLeft />
        </ArrowBtn>
        <ArrowBtn onClick={handleScrollRight}>
          <FaArrowRight />
        </ArrowBtn>
      </NavRow>
      <CardsRow ref={cardsRowRef}>
        {customersData.map((c, idx) => (
          <Card key={c.name + idx} data-aos="zoom-in" data-aos-delay={300 + idx * 100}>
            <CardHeader>
              <CardImg src={c.img} alt={c.name} />
              <CardName>{c.name}</CardName>
            </CardHeader>
            <CardDesc>{c.desc}</CardDesc>
          </Card>
        ))}
      </CardsRow>
    </Section>
  );
}