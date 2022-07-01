
import styled from "styled-components";

export const DivHeader = styled.div`

  padding-bottom: 1rem;
    display: flex;
    background-color: darkblue;
    padding-top: 4rem;
    margin-top: -3rem;
    width: 100%;
    gap: 27%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    .name{
      margin-left: 5rem;
    }
`

export const LiItens = styled.li`
    margin-left: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid black;
    padding-left: 14rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    gap: 20%;
    margin-top: 2rem;
`

export const UlItens = styled.ul`

  display: flex;
  flex-direction: column;
 
`;

export const CartInfosBuy = styled.div`
  @media(max-width: 800px) {
    
  }
    
`
