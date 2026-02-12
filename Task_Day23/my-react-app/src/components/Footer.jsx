import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme?.footer || "#232f3e"};
  color: white;
  padding: 50px 48px 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const Column = styled.div`
  h4 {
    margin-bottom: 14px;
    font-size: 16px;
  }

  p {
    margin-bottom: 8px;
    font-size: 14px;
    opacity: 0.8;
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
  }
`;

const Bottom = styled.div`
  text-align: center;
  font-size: 14px;
  opacity: 0.7;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Column>
          <h4>Get to Know Us</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Press Releases</p>
        </Column>

        <Column>
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </Column>

        <Column>
          <h4>Make Money with Us</h4>
          <p>Sell on ShopEase</p>
          <p>Affiliate Program</p>
          <p>Advertise Products</p>
        </Column>

        <Column>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Help</p>
        </Column>
      </Grid>

      <Bottom>
        © 2026 ShopEase. All rights reserved.
      </Bottom>
    </Wrapper>
  );
}







