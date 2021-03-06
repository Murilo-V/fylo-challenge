import styled from 'styled-components';

export const Container = styled.footer`
@media (max-width: 600px) {
    padding: 80px 20px 40px 20px;
    .footer-container {
        flex-direction: column;
        justify-content: center;
        align-items: left;

        .footer-nav {
            flex-direction: column;

            ul {
                margin-top: 32px;
            }
        }

        .social-media {
            margin-top: 60px;
        }
    }
}
    background: hsl(216, 53%, 9%);
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    padding: 80px 120px 40px 120px;

        .logo {
            margin-bottom: 30px;
        }

        .footer-container {
            display: flex;
            align-items: top;
            justify-content: space-around;

            div { margin:2%; }

            .location {
                display: flex;
                justify-content: space-between;
                align-items: top;

                img {
                    width: 15px;
                    height: 20px;
                }

                p {
                    margin-left: 10px;
                }
            }

            .contact {
                display: flex;
                align-items: left;
                justify-content: left;
                flex-direction: column;

                p {
                    display: flex;
                align-items: left;
                justify-content: left;
                margin-bottom: 15px;
                
                    img {
                        margin-right: 10px;
                    }
                }
            }

            .footer-nav {
                display: flex;
                align-items: top;
                justify-content: center;
                ul {
                    margin-right: 20px;
    
                    li {
                        list-style: none;
                        margin-bottom: 20px;
                        cursor: pointer;
                        width: 90px;

                        &:hover {
                            font-weight: bold;
                        }
                    }
                }
            }

            .social-media {
                display: flex;
                align-items: top;
                justify-content: center;

                svg {
                    margin-left: 20px;
                    width: 35px;
                    height: 35px;
                    border: 1px solid currentColor;
                    border-radius: 40px;
                    padding: 8px;
                    cursor: pointer;

                    &:hover {
                        color: hsl(176, 68%, 64%);
                        fill: hsl(176, 68%, 64%);
                    }
                }
            }
        }
`;