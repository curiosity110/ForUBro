import styled from "styled-components";

export const StandardButton = styled.button`
  width: ${props => (props.small ? "50px" : "70px")};
  padding-block: 0.3rem;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background: ${props => props.background};

  :hover {
    scale: 1.1;
  }
`;

export const LogoutButton = styled(StandardButton)`
  color: ${props => props.theme.text};

  width: 100px;
  font-size: 20px;
`;
