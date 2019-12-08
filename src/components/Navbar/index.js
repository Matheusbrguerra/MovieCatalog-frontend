import React, { Component } from "react";
import { Link } from "react-router-dom";
import auth from "../../services/auth";
import { ContainerApp } from "./styles";

export default class Navbar extends Component {
  handleLogout = () => {
    auth.logout();
  };

  render() {
    return (
      <center>
        <ContainerApp>
          <Link to="/app">MovieCatalog</Link>
          <Link to="/actors">Atores</Link>
          <Link to="/directors">Diretores</Link>
          <Link to="/movies">Filmes</Link>
          <Link to="/" onClick={this.handleLogout}>
            Log-out
          </Link>
        </ContainerApp>
      </center>
    );
  }
}
