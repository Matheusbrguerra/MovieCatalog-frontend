import React, { Component } from "react";
import { Container, Form, SubmitButton } from "./styles";
import Navbar from "../../components/Navbar/index";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { toast } from "react-toastify";

export default class Movie extends Component {
  state = {
    actors: [],
    directors: [],
    newDirectors: [],
    newActors: [],
    newName: "",
    newDate: "",
    newSynopsis: "",
    movie: []
  };

  componentDidMount() {
    this.loadActors();
    this.loadDirectors();
    this.loadMovies();
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {
      newDirectors,
      newActors,
      newName,
      newDate,
      newSynopsis
    } = this.state;

    if (newActors.length === 0 || newDirectors.length === 0) {
      toast.error("Não se faz filme sem diretor ou sem ator");
    } else {
      const obj = {
        directors: newDirectors,
        actors: newActors,
        name: newName,
        release_date: newDate,
        synopsis: newSynopsis
      };
      try {
        const { id } = this.props.match.params;
        await api.put(`/movies/${id}`, obj);
        toast.success("Filme editado com sucesso");
        this.setState({ newDirectors: [] });
        this.setState({ newActors: [] });
        this.setState({ newName: "" });
        this.setState({ newDate: "" });
        this.setState({ newSynopsis: "" });
      } catch (error) {
        toast.error("Erro ao cadastrar filme");
      }
    }
  };

  loadMovies = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/movies/${id}`);

    const data = response.data;

    this.setState({ movie: data });
    console.log(this.state);
  };

  loadActors = async () => {
    const response = await api.get("/actors");

    const data = response.data;

    this.setState({ actors: data });
  };

  loadDirectors = async () => {
    const response = await api.get("/directors");

    const data = response.data;

    this.setState({ directors: data });
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
    const {
      actors,
      directors,
      newName,
      newDate,
      newSynopsis,
      movie
    } = this.state;
    return (
      <>
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
                <h1>Edição do filme {movie.name}</h1>
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
      </>
    );
  }
}
