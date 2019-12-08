import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";

import { Container, Form, SubmitButton } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class Actors extends Component {
  state = {
    name: "",
    actors: []
  };

  componentDidMount() {
    this.loadActors();
  }

  loadActors = async () => {
    const response = await api.get("/actors");

    const data = response.data;

    this.setState({ actors: data });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name } = this.state;
    try {
      await api.post("/actors", { name });
    } catch (error) {
      toast.error("O ator já existe");
    } finally {
      toast.success("Ator cadastrado com sucesso");
    }
    window.location.reload(false);
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name, actors } = this.state;
    return (
      <>
        <Navbar />
        <center>
          <table>
            <td>
              <Container>
                <h1>Cadastro de Atores</h1>
                <h4>Insira o nome do ator abaixo:</h4>
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
                {actors.map(actor => (
                  <li key={actor.id}>
                    <label>{actor.name}</label>
                    <Link to={`/actor/${actor.id}`}>&#x0270E;</Link>
                    <button
                      onClick={async () => {
                        try {
                          await api.delete(`/actors/${actor.id}`);
                        } catch (error) {
                          toast.error("Erro ao excluir ator !!");
                        } finally {
                          toast.success("Ator excluido com sucesso !!");
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
            {/* <Route path="/actors/:id" component={EditActor}></Route> */}
          </table>
        </center>
      </>
    );
  }
}
