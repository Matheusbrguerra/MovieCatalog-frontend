import React, { Component } from "react";
import { Container, Form, SubmitButton } from "./styles";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/index";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

export default class EditActor extends Component {
  state = {
    actor: [],
    name: ""
  };

  componentDidMount() {
    this.loadActors();
  }

  handleNameChange = async e => {
    this.setState({ name: e.target.value });
  };

  loadActors = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/actors/${id}`);

    this.setState({ actor: response.data });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { id } = this.props.match.params;
      const { name } = this.state;
      await api.put(`/actors/${id}`, { name }, { id });
    } catch (error) {
      toast.error("Erro ao mudar o nome do ator");
    } finally {
      toast.success("Nome do ator alterado com sucesso !!");
    }
    this.props.history.push("/actors");
  };

  render() {
    const { actor } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <h1>Edição do diretor: {actor.name}</h1>
          <h4>Insira o novo nome do {actor.name} abaixo:</h4>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleNameChange}
              placeholder="Nome"
              required
            />
            <SubmitButton>Cadastrar</SubmitButton>
          </Form>
        </Container>
      </>
    );
  }
}
