import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background:
    linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.3)),
    url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8");
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 90px 20px;

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

export default function Hero() {
  return (
    <Section>
      <h1>Discover Quality Products</h1>
      <p>Trusted brands · Best prices · Fast delivery</p>
    </Section>
  );
}
