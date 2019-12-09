import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";

import { Container, SubmitButton, List } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import moment from "moment";
export default class MovieDetail extends Component {
  state = {
    movie: [],
    actors: [],
    directors: []
  };
  componentDidMount() {
    this.loadMovie();
  }

  handleNameChange = async e => {
    this.setState({ name: e.target.value });
  };

  loadMovie = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`/movies/${id}`);

    this.setState({ movie: response.data });

    var aux = [];
    this.state.movie.actor.map(actor => aux.push(actor));
    this.setState({ actors: aux });

    var aux2 = [];
    this.state.movie.director.map(director => aux2.push(director));
    this.setState({ directors: aux2 });
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
            {moment(new Date(movie.release_date)).format("DD/MM/YYYY")}
          </label>
          <label>
            Atores:
            <br />
            <List>
              {actors.map(actor => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </List>
          </label>
          <br />
          <label>
            Diretores:
            <br />
            <List>
              {directors.map(director => (
                <li key={director.id}>{director.name}</li>
              ))}
            </List>
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
