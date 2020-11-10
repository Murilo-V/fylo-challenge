import styled from 'styled-components';

export const Container = styled.header `
    @media (max-width: 600px) {
        header {
            padding: 10px !important;

            img {
                width: 70px;
            }

            li {
                font-size: 12px;    
            }
        }
    }

    header {
        padding: 50px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            max-width: 120px;
            user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
        }

        nav {
            ul {
                display: flex;

                li {
                    list-style: none;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }

                li + li {
                    margin-left: 30px;
                }
            }
        }
    }
`;