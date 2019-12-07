import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    overflow:hidden;
  } */
  html,body,#root{
    min-height:100%;
    overflow: hidden;
  }
  body{
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    -webkit-font-smoothing: antialiased !important;
  }
  body,input,button{
    color: #222;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif;
  }
  button{
    cursor: pointer;
  }
`;
