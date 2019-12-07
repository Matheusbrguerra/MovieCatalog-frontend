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
  max-width: 500px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 150px auto;
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

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  align-self: center;
  color: #fff;
  margin-top: 10px;
  height: 30px;
  width: 100px;
  background-color: #b721ff;
  background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  &:hover {
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 9%, #ff2525 99%);
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;

export const ButtonLink = styled.div`
  a {
    align-self: center;
    color: #fff;
    margin-top: 10px;
    height: 30px;
    width: auto;
    background-color: #b721ff;
    background-image: linear-gradient(19deg, #b721ff 0%, #21d4fd 100%);
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
