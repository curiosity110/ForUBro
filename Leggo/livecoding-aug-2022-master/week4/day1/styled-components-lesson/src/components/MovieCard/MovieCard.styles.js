import styled from "styled-components";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;
  color: ${props => props.theme.text};

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
