import styled from 'styled-components';

export const IntroStyle = styled.div `
@media (max-width: 600px) {
    .container-intro {
        img {
                width: 300px;
            }

        h1, p {
            width: 100% !important;
        }
        
        h1 {
                font-size: 18pt !important;
            }

        p {
            font-size: 11pt !important;
        }

        button {
            margin-bottom: 20px !important;
        }
    }
}

.container-intro {
    color: #fff;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 0 4px 0 4px;
   background-image: url('https://raw.githubusercontent.com/Murilo-V/fylo-challenge/9b9df386f194fb02dee441c39e5c86c97a41fd15/src/assets/bg-curvy-desktop.svg');
   background-repeat: no-repeat;
   background-size: 100vw;
   background-position-y: bottom;

   img { 
        max-width: 600px;
        user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
    }

    h1 {
        font-size: 30pt;
        max-width: 800px;
        background-color: rgba(0, 0, 0, 0);
    }

    p {
        margin-top: 30px;
        font-size: 12pt;
        max-width: 470px;
        background-color: rgba(0, 0, 0, 0);
    }

    p + p {
        margin-top: 0;
    }

    button {
        padding: 12px;
        cursor: pointer;
        font-size: 12pt;
        margin-top: 40px;
        margin-bottom: 200px;
        width: 230px;
        border-radius: 20px;
        border-style: none;
        color: #fff;
        font-weight: 700;
        transition: 400ms;
        transition-property: background-image;
        background-image: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));

        &:hover {
            background-image: linear-gradient(to right,hsl(198, 60%, 50%) , hsl(176, 68%, 64%));
        }
    }
}   
`;

export const FeaturesStyle = styled.div`

    .container-features {
        background-color: hsl(218, 28%, 13%);

        .access-security, .real-time-store {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-bottom: 80px;
            text-align: center;

            div {
                width: 400px;

                img { 
                    max-width: 600px;
                    user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
                }
            }

            p {
                font-size: 10pt;
                margin: 14px 0px 14px 0px;
            }
        }

        .stay-productive {
            display: flex;
            align-items: center;
            justify-content: space-around;

            img {
                width: 40%;
                user-select: none;
                        -moz-user-select: none;
                        -webkit-user-drag: none;
                        -webkit-user-select: none;
                        -ms-user-select: none;
            }

            div {
                max-width: 420px;

                h2 {
                    font-size: 26pt;
                }

                p {
                    font-size: 12pt;
                    margin: 20px 0px 20px 0px;
                }

                a {
                    text-decoration: none;
                    color:hsl(176, 68%, 64%);
                    border-bottom: 1px solid hsl(176, 68%, 64%);
                    padding-bottom: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 40%;

                    div {
                        width: 20px;
                        height: 20px;
                        background-image: url('https://raw.githubusercontent.com/Murilo-V/fylo-challenge/7a86a591f6aa39a40c9e610338f35a074f89ad1f/src/assets/icon-arrow.svg');
                        background-position:center;
                        background-repeat: no-repeat;
                    }
                }
            }
        }
    }
`;

export const Comments = styled.div`
    .comments {
        padding-top: 120px;
        background-color: hsl(218, 28%, 13%);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('https://github.com/Murilo-V/fylo-challenge/blob/main/src/assets/bg-quotes.png?raw=true');
        background-repeat: no-repeat;
        background-position-x: 8vw;
        background-position-y: 15vh;
    }
`;