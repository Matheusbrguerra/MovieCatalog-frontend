import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import { MovieList, MainDiv } from "./styles";
import api from "../../services/api";
import auth from "../../services/auth";

export default class Home extends Component {
  state = {
    movies: [],
    page: 1
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async page => {
    const response = await api.get(`/movies/?page=${this.state.page}`);
    this.setState({ movies: response.data });
  };

  render() {
    const { movies } = this.state;
    return (
      <MainDiv>
        <Navbar />
        <center>
          <MovieList>
            {movies.map(movie => (
              <li key={movie.id}>
                <label>{movie.name}</label>
                <label>{movie.synopsis}</label>
                <label>{movie.release_date}</label>
                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
                <Link to={`/edit/${movie.id}`}>Editar</Link>
              </li>
            ))}
          </MovieList>
        </center>
      </MainDiv>
    );
  }
}
