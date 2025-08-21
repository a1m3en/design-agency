import styled from "styled-components";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: var(--gray);
  border-radius: 40px;
  padding: 2.9rem 3rem;
  margin: 19rem auto 9rem auto;
  max-width: 1350px;
  min-height: 350px;
`;

const Left = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.2rem;
  line-height: 1.1;
`;

const Highlight = styled.span`
  color: #8b6fff;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #bdbdbd;
  margin-bottom: 0;
`;

const Right = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const FAQItem = styled.div`
  background: transparent;
  border-bottom: 1px solid #444;
  padding: 1.2rem 0;
  cursor: pointer;
`;

const Question = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Answer = styled.div`
  font-size: 1rem;
  color: #bdbdbd;
  margin-top: 0.7rem;
  transition: max-height 0.3s;
`;

const Arrow = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
  transition: transform 0.3s;
  ${({ open }) => open && "transform: rotate(180deg);"}
`;

const faqs = [
  {
    q: "How does the AI generate designs?",
    a: "Our AI analyzes your input and preferences to create unique, tailored designs using advanced algorithms.",
  },
  {
    q: "Can I customize the AI-generated designs?",
    a: "Yes, you can easily adjust colors, layouts, and other elements to fit your brand and vision.",
  },
  {
    q: "What support options are available?",
    a: "We offer 24/7 chat support, email assistance, and a comprehensive help center.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes, you can try our platform free for 14 days with no credit card required.",
  },
  {
    q: "How secure is my data?",
    a: "We use industry-standard encryption and never share your data with third parties.",
  },
  {
    q: "What integrations are available?",
    a: "Our assistant integrates with Figma, Sketch, Adobe XD, and other popular design tools.",
  },
];

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Section data-aos="fade-up">
      <Left data-aos="fade-right" data-aos-delay="100">
        <Title>
          Frequently Asked <Highlight>Questions</Highlight>
        </Title>
        <Description>
          Have questions about our AI-Powered Design Assistant? Find answers to the
          most common questions and learn how our platform can enhance your
          creative process.
        </Description>
      </Left>
      <Right data-aos="fade-left" data-aos-delay="200">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={faq.q}
            onClick={() =>
              setOpenIndex(openIndex === idx ? null : idx)
            }
          >
            <Question>
              {faq.q}
              <Arrow open={openIndex === idx}>▼</Arrow>
            </Question>
            {openIndex === idx && <Answer>{faq.a}</Answer>}
          </FAQItem>
        ))}
      </Right>
    </Section>
  );
}