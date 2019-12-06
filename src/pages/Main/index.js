import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import api from "../../services/api";

import { Container, Form, SubmitButton, ButtonLink } from "./styles";

class Main extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handleInputPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    const session = {
      email,
      password
    };

    const response = await api.post("/session", session);

    const token = response.data.token;

    localStorage.setItem("token", token);
  };

  render() {
    return (
      <Container>
        <h1>Catálogo de Filmes</h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            onChange={this.handleInputEmailChange}
            placeholder="E-mail"
          />
          <input
            type="password"
            onChange={this.handleInputPasswordChange}
            placeholder="Senha"
          />
          <ButtonLink>
            <Link to="/register">Cadastrar-se</Link>
          </ButtonLink>
          <SubmitButton>Logar-se</SubmitButton>
        </Form>
      </Container>
    );
  }
}
export default Main;
