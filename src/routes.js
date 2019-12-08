import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Main from "../src/pages/Main/index";
import Register from "../src/pages/Register/index";
import Home from "./pages/Home/index";
import Actors from "./pages/Actors/index";
import Movies from "./pages/Movies/index";
import Directors from "./pages/Directors/index";
import EditMovies from "./pages/EditMovie/index";
import EditDirectors from "./pages/EditDirector/index";
import EditActors from "./pages/EditActor/index";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/app" component={Home} />
        <PrivateRoute path="/actors" component={Actors} />
        <PrivateRoute path="/actor/:id" component={EditActors} />
        <PrivateRoute path="/directors" component={Directors} />
        <PrivateRoute path="/director/:id" component={EditDirectors} />
        <PrivateRoute path="/movies" component={Home} />
        <PrivateRoute path="/movie/:id" component={Movies} />
        <PrivateRoute path="/edit/:id" component={EditMovies} />
      </Switch>
    </BrowserRouter>
  );
}
