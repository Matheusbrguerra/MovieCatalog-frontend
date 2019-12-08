import React, { Component } from "react";
import { Container, Form, SubmitButton } from "./styles";
import Navbar from "../../components/Navbar/index";
import api from "../../services/api";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

class EditMovie extends Component {
  state = {
    directors: [],
    actors: [],
    newDirectors: [],
    newActors: [],
    newName: "",
    newDate: "",
    newSynopsis: ""
  };

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/movies/${id}`);
    console.log(response.data);
  };

  saveDirector = async e => {
    var arr = Number(e.target.value);
    const { newDirectors } = this.state;

    if (e.target.checked === true) {
      this.setState({ newDirectors: [...newDirectors, arr] });
    } else {
      var array = [...this.state.newDirectors];
      var index = array.indexOf(Number(e.target.value));
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ newDirectors: array });
      }
      console.log(this.state.newDirectors);
    }
  };

  saveActor = async e => {
    var arr = Number(e.target.value);
    const { newActors } = this.state;

    if (e.target.checked === true) {
      this.setState({ newActors: [...newActors, arr] });
    } else {
      var array = [...this.state.newActors];
      var index = array.indexOf(Number(e.target.value));
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ newActors: array });
      }
      console.log(this.state.newActors);
    }
  };

  handleNameChange = async e => {
    this.setState({ newName: e.target.value });
    console.log(this.state.newName);
  };

  handleDateChange = async e => {
    this.setState({ newDate: e.target.value });
    console.log(this.state.newDate);
  };

  handleSynopsisChange = async e => {
    this.setState({ newSynopsis: e.target.value });
    console.log(this.state.newSynopsis);
  };

  render() {
    const { actors, directors, newName, newDate, newSynopsis } = this.state;
    return (
      <center>
        <Navbar />
        <table>
          <td>
            <Container>
              <h1>Marque o(s) diretor(es) desejado(s):</h1>
              <form>
                {directors.map(director => (
                  <>
                    {director.name} &nbsp;&nbsp;&nbsp;
                    <input
                      key={director.id}
                      onClick={this.saveDirector}
                      onChange={this.handleSelect}
                      type="checkbox"
                      value={director.id}
                    ></input>
                    <br />
                  </>
                ))}
              </form>
            </Container>
          </td>
          <td>
            <Container>
              <h1>Cadastro de Filmes</h1>
              <h3>Insira os dados abaixo:</h3>
              <Form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={this.handleNameChange}
                  placeholder="Nome"
                  value={newName}
                  required
                />
                <input
                  type="date"
                  onChange={this.handleDateChange}
                  placeholder="Data de lançamento"
                  value={newDate}
                  required
                />
                <input
                  type="text"
                  onChange={this.handleSynopsisChange}
                  placeholder="Sinopse"
                  value={newSynopsis}
                  required
                />
                <SubmitButton>Cadastrar Filme</SubmitButton>
              </Form>
            </Container>
          </td>
          <td>
            <Container>
              <h1>Marque o(s) ator(es) desejado(s):</h1>
              <form>
                {actors.map(actor => (
                  <>
                    {actor.name}&nbsp;&nbsp;&nbsp;
                    <input
                      key={actor.id}
                      onClick={this.saveActor}
                      type="checkbox"
                      value={actor.id}
                    ></input>
                    <br />
                  </>
                ))}
              </form>
            </Container>
          </td>
        </table>
      </center>
    );
  }
}
export default EditMovie;
