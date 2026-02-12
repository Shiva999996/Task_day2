import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 36px;
  background: ${({ theme }) => theme.header};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const SearchBar = styled.div`
  flex: 1;
  margin: 0 40px;

  input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
  }
`;

const Right = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Header({ darkMode, setDarkMode }) {
  return (
    <Wrapper>
      <Logo>ShopEase</Logo>

      <SearchBar>
        <input placeholder="Search products, brands and more" />
      </SearchBar>

      <Right>
        <ThemeButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </ThemeButton>
      </Right>
    </Wrapper>
  );
}
