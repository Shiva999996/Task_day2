import styled from "styled-components";

const Bar = styled.nav`
  display: flex;
  gap: 18px;
  padding: 10px 36px;
  background: ${({ theme }) => theme.featureBar};
  color: white;
  font-size: 13px;
`;

export default function HeaderFeatures() {
  return (
    <Bar>
      <span>All</span>
      <span>Best Sellers</span>
      <span>Mobiles</span>
      <span>Electronics</span>
      <span>Fashion</span>
      <span>Customer Service</span>
    </Bar>
  );
}
