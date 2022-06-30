import styled from "styled-components";

export const ItensLi = styled.li`
  background-color: navy;
  .button {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 800px){
    display: flex;
    justify-content: space-between;
  }

`;

export const UlBuy = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
`
