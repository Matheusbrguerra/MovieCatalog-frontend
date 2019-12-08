import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";

import { Container, Form, SubmitButton } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movie: [],
    actors: [],
    drectors: []
  };
  componentDidMount() {
    this.loadMovie();
  }

  handleNameChange = async e => {
    this.setState({ name: e.target.value });
  };

  loadMovie = async () => {
    const { actors } = this.state;
    const { id } = this.props.match.params;
    const response = await api.get(`/movies/${id}`);

    this.setState({ movie: response.data });

    var aux = [];
    this.state.movie.actor.map(actor => aux.push(actor));
    this.setState({ actors: aux });

    console.log(this.state);
  };

  render() {
    const { movie, actors, directors } = this.state;
    return (
      <>
        <Navbar />
        <Container>
          <h1>{movie.name}</h1>
          <label>
            Sinopse:
            <br />
            {movie.synopsis}
          </label>
          <br />
          <label>
            Data de lançamento:
            <br />
            {Date(movie.release_date)}
          </label>
          <label>
            Atores:
            <br />
            <ul>
              {actors.map(actor => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </ul>
          </label>
          <br />
          <label>
            Diretores:
            <br />
            <ul></ul>
          </label>
          <SubmitButton
            onClick={async () => {
              try {
                await api.delete(`/movies/${movie.id}`);
                this.props.history.push("/movies");
              } catch (error) {
                toast.error("Erro ao excluir diretor");
              } finally {
                toast.success("Diretor excluido com sucesso");
              }
              window.location.reload(false);
            }}
          >
            Excluir
          </SubmitButton>
        </Container>
      </>
    );
  }
}
