import styled from 'styled-components';

export const Container = styled.div `
   .container-comment {
        padding: 20px;
        margin: 15px;
        max-width: 350px;
        border-radius: 10px;
        background-color: hsl(217, 28%, 15%);
        font-size: 11pt;

        .profile {
            display: flex;
            align-items: center;
            justify-content: left;
            margin-top: 20px;

            img {
                width: 13%;
                border-radius: 200px;
                user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
            }

            div {
                font-size: 10pt;
                margin-left: 10px;
                display: flex;
                align-items: left;
                justify-content: left;
                flex-direction: column;
            }
        }
   }
   
   
`;