import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ContainerApp } from "./styles";

export default class Navbar extends Component {
  state = {
    user: ""
  };
  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const userInfo = localStorage.getItem("user");
    const user = JSON.parse(userInfo);
    this.setState({ user: toString(user.name) });
    console.log(this.state);
  };

  render() {
    return (
      <ContainerApp>
        <Link to="/app">MovieCatalog</Link>
        <Link to="/actors">Atores</Link>
        <Link to="/directors">Diretores</Link>
        <Link to="/movies">Filmes</Link>
        <select>
          <option selected></option>
          <option>Log-out</option>
        </select>
      </ContainerApp>
    );
  }
}
