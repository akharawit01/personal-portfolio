import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    html,
    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }
    
`;

export default Styles;
