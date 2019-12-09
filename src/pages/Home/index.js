import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/index";
import { MovieList, MainDiv } from "./styles";
import api from "../../services/api";
import { Div } from "./styles";
import moment from "moment";

export default class Home extends Component {
  state = {
    movies: [],
    page: 1
  };

  componentDidMount() {
    this.loadMovies(1);
    console.log(this.state);
  }

  loadMovies = async page => {
    const response = await api.get("/movies?page=" + page);
    this.setState({ movies: response.data });
    return response.data.length;
  };

  nextPage = e => {
    e.preventDefault();
    let { page } = this.state;
    page++;
    this.setState({ page });
    this.loadMovies(page);
    console.log(this.state);
  };

  prevPage = e => {
    e.preventDefault();
    let { page } = this.state;
    --page;
    this.setState({ page });
    this.loadMovies(page);
    console.log(this.state);
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
                <label>
                  {moment(new Date(movie.release_date)).format("DD/MM/YYYY")}
                </label>
                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                &nbsp;| &nbsp;
                <Link to={`/edit/${movie.id}`}>Editar</Link>
              </li>
            ))}
          </MovieList>
          <Div>
            <button disabled={this.state.page <= 1} onClick={this.prevPage}>
              →
            </button>
            <button
              disabled={this.state.movies.length < 10}
              onClick={this.nextPage}
            >
              →
            </button>
          </Div>
        </center>
      </MainDiv>
    );
  }
}
