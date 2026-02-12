import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: 0.2s;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    height: 190px;
    object-fit: contain;
    margin-bottom: 10px;
  }
`;

const Price = styled.p`
  span {
    color: ${({ theme }) => theme.muted};
    text-decoration: line-through;
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
`;

export default function ProductCard({ img, title, price, oldPrice }) {
  return (
    <Card>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <Price>
        {price} {oldPrice && <span>{oldPrice}</span>}
      </Price>
      <Button>Add to Cart</Button>
    </Card>
  );
}
