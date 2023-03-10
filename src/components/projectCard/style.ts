import styled, { css } from "styled-components";

interface PropTypeBg {
    background: string;
};

export const StylesProjectCard = styled.div`
    background-color:red;
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    div{
        background-color:var(--Color-gray-150);
        width:100%;
        height: 100%;
        padding:200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:40px;
    }
    figure{
        height: 4
        0px;
        display:flex;
        flex-direction:row;
        gap:10px;
    }
    img{
           height: 40px;
    }
    p{
        width: 40%;
    }
`