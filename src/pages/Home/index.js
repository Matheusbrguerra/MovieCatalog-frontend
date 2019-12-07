import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ContainerApp } from "../../components/Container/index";
import { ButtonLink } from "./styles";
import api from "../../services/api";
import auth from "../../services/auth";

export default class Home extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.handleLogout();
  }

  handleLogout = () => {
    auth.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <ContainerApp>
        <ButtonLink>
          <Link to="/app">MovieCatalog</Link>
        </ButtonLink>
      </ContainerApp>
    );
  }
}
