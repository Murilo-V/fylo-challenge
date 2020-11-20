import styled from 'styled-components';

export const Container = styled.div`
     background: hsl(216, 53%, 9%);
            z-index: 0;   
                 
        form {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            box-shadow: 0 20px 20px #080808;
            background: hsl(219, 30%, 18%);
            width: 60%;
            margin: 0 auto 0 auto;
            padding: 30px 50px 30px 50px;

            input {
                border-radius: 20px;
                padding: 12px;
                width: 60%;
                color: hsl(219, 30%, 18%);
                font-weight: bold;
                outline: none;
            }

            button {
                width: 37%;
                margin-left: 3%;
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
                border: none;
                outline:none;

                &:hover {
                    background-image: linear-gradient(to right, hsl(176, 68%, 64%), hsl(176, 68%, 64%));
                }
            }

            p {
                color: hsl(0, 100%, 63%);
                font-weight: bold;
                font-size: 10pt;
                margin-top: 10px;
                display: none;
            }
        }   
`;
