import styled from "styled-components";

export const Container = styled.div`
  @font-face {
    font-family: "billabongregular";
    src: url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot");
    src: url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix")
        format("embedded-opentype"),
      url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff")
        format("woff"),
      url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf")
        format("truetype"),
      url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular")
        format("svg");
    font-weight: normal;
    font-style: normal;
  }
  max-width: 150px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 150px auto;
  h1 {
    font-family: billabong, "billabongregular";
    font-size: 50px;
    background-color: #b721ff;
    background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const MovieList = styled.ul`
  display: inline-block;
  *display: inline;
  li {
    height: 500px;
    max-width: 200px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin: 10px auto;
    display: inline-block;
    padding: 10px 1%;
    width: 40%;
    list-style: none;
    margin-left: 10px;
    margin-right: 10px;
    top: 0px;
    height: auto;
    text-align: center;
    label {
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
    }
  }
`;

export const MainDiv = styled.div`
  overflow-y: none;
`;
