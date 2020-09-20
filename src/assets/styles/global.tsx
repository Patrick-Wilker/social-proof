import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap');
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        min-height: 100%;
    }
    body{
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 15px;
        font-family: 'Spartan', sans-serif;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;