import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";

import { Container, Form, SubmitButton } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class Actors extends Component {
  state = {
    name: "",
    directors: []
  };

  componentDidMount() {
    this.loadDirectors();
  }

  loadDirectors = async () => {
    const response = await api.get("/directors");

    const data = response.data;

    this.setState({ directors: data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name } = this.state;
    try {
      await api.post("/directors", { name });
    } catch (error) {
      toast.error("O diretor já existe");
    } finally {
      toast.success("Diretor cadastrado com sucesso");
    }
    window.location.reload(false);
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name, directors } = this.state;
    return (
      <>
        <Navbar />
        <center>
          <table>
            <td>
              <Container>
                <h1>Cadastro de Diretor</h1>
                <h4>Insira o nome do diretor abaixo:</h4>
                <Form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    onChange={this.handleNameChange}
                    placeholder="Nome"
                    value={name}
                    required
                  />
                  <SubmitButton>Cadastrar</SubmitButton>
                </Form>
              </Container>
            </td>
            <td></td>
            <td>
              <Container>
                {directors.map(director => (
                  <li key={director.id}>
                    <label>{director.name}</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/director/${director.id}`}>&#x0270E;</Link>
                    <button
                      onClick={async () => {
                        try {
                          await api.delete(`/directors/${director.id}`);
                        } catch (error) {
                          toast.error("Erro ao excluir diretor");
                        } finally {
                          toast.success("Diretor excluido com sucesso");
                        }
                        window.location.reload(false);
                      }}
                    >
                      &#128465;
                    </button>
                  </li>
                ))}
              </Container>
            </td>
          </table>
        </center>
      </>
    );
  }
}
