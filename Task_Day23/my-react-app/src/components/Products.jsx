import styled from "styled-components";
import ProductCard from "./ProductCard";

import headphones from "../assets/Headphone.jpg";
import smartphone from "../assets/smartphone.jpg";
import laptop from "../assets/laptop.jpg";
import tv from "../assets/tv.jpg";

const Section = styled.section`
  padding: 50px 48px;
`;

const Title = styled.h2`
  margin-bottom: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 26px;
`;

export default function Products() {
  return (
    <Section>
      <Title>Featured Products</Title>

      <Grid>
        <ProductCard
          img={headphones}
          title="Sony Wireless Headphones"
          price="₹24,999"
          oldPrice="₹29,999"
        />

        <ProductCard
          img={smartphone}
          title="Premium Smartphone"
          price="₹49,999"
          oldPrice="₹59,999"
        />

        <ProductCard
          img={laptop}
          title="Ultra Slim Laptop"
          price="₹89,999"
          oldPrice="₹99,999"
        />

        <ProductCard
          img={tv}
          title="55-inch 4K Smart TV"
          price="₹54,990"
          oldPrice="₹64,990"
        />
      </Grid>
    </Section>
  );
}
