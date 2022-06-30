import styled from "styled-components";

export const BuyInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: brown;
    top: 40%;
    left: 65%;
    @media (max-width: 800px) {
        position: absolute;
        background-color: brown;
        top: 80%;
        left: 35%;
    }
`
export const Message = styled.div`
    margin-left: 12%;

`

export const MessageReturn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`