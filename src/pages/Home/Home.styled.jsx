import styled from "styled-components";

export const HomeStyled = styled.div`
  background-color: #333;

  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  background-blend-mode: multiply;
`;
export const LandingStyled = styled.div`
  background: url(../images/background-home.JPG);
  background-size: cover;
  background-position: center;
  min-height: 80vh;

  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: 1fr;
  }
`;
export const Mainstyled = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  `;
