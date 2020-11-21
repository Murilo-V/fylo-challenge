import styled from 'styled-components';

export const IntroStyle = styled.div `
@media (max-width: 600px) {
    padding: 0 20px 0 20px;
    background-image: url('https://raw.githubusercontent.com/Murilo-V/fylo-challenge/9b9df386f194fb02dee441c39e5c86c97a41fd15/src/assets/bg-curvy-mobile.svg');

        img {
                width: 340px;
            }

        h1, p {
            width: 100% !important;
        }
        
        h1 {
                font-size: 20pt !important;
            }

        p {
            font-size:10pt !important;
        }

        button {
            margin-bottom: 120px !important;
        }
}

    background-color: hsl(217, 28%, 15%);
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
        margin-top: 40px;
        margin-bottom: 200px;
    }
`;

export const FeaturesStyle = styled.div`
@media (max-width: 600px) {
    .access-security, .real-time-store {
        flex-direction: column;
        padding-bottom: 0 !important;

        div {
            margin-bottom: 40px;
        }
        
        h3 {
                font-size: 16pt !important;
        }

        p {
                font-size: 10pt !important;
        }
    }

    .stay-productive {
        flex-direction: column;
        padding: 0 20px 0 20px;

        img {
                width: 100% !important;
        }

        a {
            width: 50% !important;
            img {
                width: 20px !important;
                height: 20px !important;
            }
        }
    }
 }

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

                    &:hover {
                        color:#fff;
                        border-bottom: 1px solid #fff;

                        img {
                            filter: grayscale(100%);
                        }
                    }

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
`;

export const Comments = styled.div`
@media (max-width: 600px) {
    flex-direction: column;
}
        padding-top: 120px;
        background-color: hsl(218, 28%, 13%);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('https://github.com/Murilo-V/fylo-challenge/blob/main/src/assets/bg-quotes.png?raw=true');
        background-repeat: no-repeat;
        background-position-x: 6vw;
        background-position-y: 12vh;
`;

export const GetStartedDiv = styled.div`
@media (max-width: 600px) {
    margin-top: 60px;
    width: 90%;
    padding: 30px 20px 0 20px;
}
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 30px 50px 0 50px;
        background: hsl(219, 30%, 18%);
        width: 60%;
        margin: 150px auto 0 auto;
        text-align: center;

        h4 {
            font-size: 20pt;
            margin-bottom: 12px;
        }

        p {
            font-size: 12pt;
        }
`;