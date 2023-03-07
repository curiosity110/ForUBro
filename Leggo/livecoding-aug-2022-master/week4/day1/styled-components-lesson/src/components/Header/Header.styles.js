import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  background: ${props => props.theme.bgSecondary};
  color: ${props => props.theme.text};
  padding-inline: 2rem;
`;

export const Navbar = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
