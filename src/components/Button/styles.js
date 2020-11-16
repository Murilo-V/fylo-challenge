import styled from 'styled-components';

export const Container = styled.button `
        padding: 12px;
        cursor: pointer;
        font-size: 12pt;
        width: 230px;
        border-radius: 20px;
        border-style: none;
        color: #fff;
        font-weight: 700;
        transition: 400ms;
        transition-property: background-image;
        background-image: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
`;