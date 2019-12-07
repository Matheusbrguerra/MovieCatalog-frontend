import styled from "styled-components";

export const ContainerApp = styled.div`
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
  max-width: full;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding-bottom: 0px;
  overflow: hidden;
  a {
    font-family: billabong, "billabongregular";
    padding-left: 30px;
    font-size: 50px;
    background-color: #b721ff;
    background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
      background-color: #ffe53b;
      background-image: linear-gradient(147deg, #ffe53b 9%, #ff2525 99%);
    }
  }
`;
