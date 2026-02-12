import styled from "styled-components";

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: ${({ theme }) => theme.card};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Title = styled.h3`
  margin-bottom: 16px;
  font-size: 20px;
`;

const Button = styled.button`
  background:yellow;
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 12px 26px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 10px;
`;

const SmallText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
`;

export default function Personalized() {
  return (
    <Section>
      <Title>See personalized recommendations</Title>
      <Button>Sign in</Button>
      <SmallText>New customer? Start here.</SmallText>
    </Section>
  );
}
