import React, { Component } from "react";
import { Container, Form, SubmitButton } from "./styles";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/index";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

export default class EditDirector extends Component {
  state = {
    director: [],
    name: ""
  };

  componentDidMount() {
    this.loadDirectors();
  }

  handleNameChange = async e => {
    this.setState({ name: e.target.value });
  };

  loadDirectors = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/directors/${id}`);

    this.setState({ director: response.data });
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const { id } = this.props.match.params;
      const { name } = this.state;
      await api.put(`/directors/${id}`, { name }, { id });
    } catch (error) {
      toast.error("Erro ao mudar o nome do diretor");
    } finally {
      toast.success("Nome do diretor alterado com sucesso !!");
    }
    this.props.history.push("/directors");
  };

  render() {
    const { director } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <h1>Edição do diretor: {director.name}</h1>
          <h4>Insira o novo nome do {director.name} abaixo:</h4>
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
