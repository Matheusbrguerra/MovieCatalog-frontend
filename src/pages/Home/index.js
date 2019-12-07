import React, { Component } from "react";

import Navbar from "../../components/Navbar/index";
import { MovieList, MainDiv } from "./styles";
import api from "../../services/api";
import auth from "../../services/auth";

export default class Home extends Component {
  state = {
    movies: [],
    page: 2
  };

  componentDidMount() {
    this.loadMovies();
    // this.handleLogout();
  }

  loadMovies = async page => {
    const response = await api.get(`/movies/?page=${this.state.page}`);
    this.setState({ movies: response.data });
  };

  handleLogout = () => {
    auth.logout();
    this.props.history.push("/");
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
                <a href="#list">Ver detalhes</a>
              </li>
            ))}
          </MovieList>
        </center>
      </MainDiv>
    );
  }
}
