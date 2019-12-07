import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";

import { Container, Form } from "./styles";

export default class Actors extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container>
          <h1>Cadastro</h1>
          <h3>Insira os dados abaixo:</h3>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleNameChange}
              placeholder="Nome"
              required
            />
          </Form>
        </Container>
      </>
    );
  }
}
