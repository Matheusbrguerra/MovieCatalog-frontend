import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import auth from "../../services/auth";

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
    try {
      const response = await api.post("/session", session);
      const user = response.data.user;
      const token = response.data.token;

      auth.login(token, user);
      this.props.history.push("/app");
    } catch (err) {
      toast.error("Usuário ou senha inválidos !!");
    }
  };

  render() {
    return (
      <Container>
        <h1>MovieCatalog</h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="email"
            onChange={this.handleInputEmailChange}
            placeholder="E-mail"
            required
          />
          <input
            type="password"
            onChange={this.handleInputPasswordChange}
            placeholder="Senha"
            required
          />
          <SubmitButton>Logar-se</SubmitButton>
          <ButtonLink>
            <Link to="/register">Cadastrar-se</Link>
          </ButtonLink>
        </Form>
      </Container>
    );
  }
}
export default Main;
