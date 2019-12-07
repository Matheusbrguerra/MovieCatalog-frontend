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
  padding: 30px;
  h1 {
    font-family: billabong, "billabongregular";
    font-size: 50px;
    background-color: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  svg {
    margin-right: 10px;
  }
`;

export const ButtonLink = styled.div`
  flex-direction: row;

  a {
    font-family: billabong, "billabongregular";
    padding-left: 10px;
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

export const List = styled.ul`
  flex-direction: column;
  li {
    display: inline;
  }
`;
