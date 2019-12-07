import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonLink } from "./styles";

import Navbar from "../../components/Navbar/index";

import api from "../../services/api";
import auth from "../../services/auth";

export default class Home extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.loadMovies();
    // this.handleLogout();
  }

  loadMovies = async () => {
    const { movies } = this.state;
    const response = await api.get("/movies");

    this.setState({
      movies: response.data
    });
  };

  handleLogout = () => {
    auth.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1>App</h1>
      </div>
    );
  }
}
