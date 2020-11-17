import styled from 'styled-components';

export const Container = styled.footer`
    background: hsl(216, 53%, 9%);
    z-index: -1;
    position: absolute;
    left: 0;
    right: 0;
    padding: 80px 120px 40px 120px;

    img {
            user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
        }

        .logo {
            margin-bottom: 30px;
        }

        .footer-container {
            display: flex;
            align-items: center;
            justify-content: space-around;

            .location {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    margin-left: 10px;
                }
            }
        }
`;