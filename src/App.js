import React from "react";
import Routes from "./routes";
import GlobalStyle from "../src/styles/global";
import { toast } from "react-toastify";

toast.configure();

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
