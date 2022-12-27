import styled from "styled-components";


export const LandingInnerStyled = styled.div`
  background-color: rgba(153, 153, 153, 0.8271);
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  min-height: 30vh;
  transition: all 0.3s ease-in-out;
  .link-landing{
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }
   h1 {
    padding: 0 20px;
    text-align: center;
    margin: 0;
    font-size: 1.9rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px 20px;
    margin: 0;
  }
  &:hover {
    background-color: rgba(153, 153, 153, 0.2271);
    text-shadow: 0 0 10px #fff;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;


