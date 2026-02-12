import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.backToTop};
  text-align: center;
  padding: 16px;
  cursor: pointer;
  color: white;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

export default function BackToTop() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return <Wrapper onClick={scrollTop}>Back to top</Wrapper>;
}
