import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 1.5rem;
    padding: 0;
    display: grid;
    grid-template-rows: 60px auto 60px;
    height: 100vh;
    background-color: rgb(132 148 161);
    font-family: sans-serif;
    font-size:2rem;
    max-width:600px;
  }
  
  ul,
  ol,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  h1,h2{
    color: #dfdfe7;
    font-size:2rem;
    margin:1rem 0;
  }



  p {
    line-height: 1.5;
    font-family: sans-serif;
  }
  
  input,
  button,
  select,
  textarea ,div{
    outline: none;
    border: none;
    border-radius: 0.2rem;
  }
  
  textarea {
    resize: none;
  }
  
  ul li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
`;

export default GlobalStyle;
