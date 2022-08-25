import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        adding:0;
        box-sizing:border-box;
        font-family:'Montserrat',sans-serif;
    }

    html, body{
        overflow-x:hidden;
    }
`;

export default  GlobalStyle;