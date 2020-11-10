import styled from 'styled-components';

export const Container = styled.div `
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
   background-image: url('https://raw.githubusercontent.com/Murilo-V/fylo-images/328150e51ca15c961fa181fea432c97d67c45f29/bg-curvy-desktop.svg');
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