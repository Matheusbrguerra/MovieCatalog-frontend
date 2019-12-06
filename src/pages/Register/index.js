import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Container, Form, SubmitButton, ButtonLink } from "./styles";
import { Link, Redirect } from "react-router-dom";
import api from "../../services/api";

class Register extends Component {
  state = {
    loading: false,
    hasError: false,
    name: "",
    email: "",
    password: ""
  };

  loadItens = async () => {
    const response = await api.get("/movies");
    console.log(response.data);
  };
  componentDidMount() {
    this.loadItens();
  }

  handleSubmit = async e => {
    const { name, email, password } = this.state;
    e.preventDefault();
    this.setState({ loading: true });

    const register = {
      name,
      email,
      password
    };
    try {
      await api.post("/user", register);
    } catch (error) {
    } finally {
      this.setState({ name: "" });
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.setState({ loading: false });
    }
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = e => {
    const valor = e.target.value;
    const lowvalue = valor.toLowerCase();
    this.setState({ email: lowvalue });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <Container>
        <h1>Cadastro</h1>
        <h3>Insira os dados abaixo:</h3>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleNameChange}
            placeholder="Nome"
          />
          <input
            type="text"
            onChange={this.handleEmailChange}
            placeholder="E-mail"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            placeholder="Senha"
          />
          {this.state.loading == true ? (
            <SubmitButton loading={this.state.loading}>
              Carregando...
            </SubmitButton>
          ) : (
            <SubmitButton loading={this.state.loading}>Cadastrar</SubmitButton>
          )}
        </Form>
      </Container>
    );
  }
}
export default Register;
