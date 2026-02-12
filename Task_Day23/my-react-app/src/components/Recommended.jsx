import styled from "styled-components";
import ProductCard from "./ProductCard";

import smartwatch from "../assets/smartwatch.jpg";
import keyboard from "../assets/keyboard.jpg";
import mouse from "../assets/mouse1.jpg";
import earbuds from "../assets/earbuds.jpg";

const Section = styled.section`
  padding: 50px 48px;
  background: ${({ theme }) => theme?.recommended || "#f9fafb"};
`;

const Title = styled.h2`
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 26px;
`;

export default function Recommended() {
  return (
    <Section>
      <Title>Recommended For You</Title>

      <Grid>
        <ProductCard
          img={smartwatch}
          title="Smart Watch Series 9"
          price="₹12,999"
          oldPrice="₹15,999"
        />

        <ProductCard
          img={keyboard}
          title="Mechanical RGB Keyboard"
          price="₹3,499"
          oldPrice="₹4,999"
        />

        <ProductCard
          img={mouse}
          title="Wireless Gaming Mouse"
          price="₹2,199"
          oldPrice="₹3,499"
        />

        <ProductCard
          img={earbuds}
          title="Noise Wireless Earbuds"
          price="₹4,999"
          oldPrice="₹6,999"
        />
      </Grid>
    </Section>
  );
}
