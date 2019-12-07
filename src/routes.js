import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import Main from "../src/pages/Main/index";
import Register from "../src/pages/Register/index";
import Home from "./pages/Home/index";

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
        <Route path="/" exact component={Main} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/app" component={Home} />
        <PrivateRoute path="/actors" component={Home} />
        <PrivateRoute path="/directors" component={Home} />
        <PrivateRoute path="/movies" component={Home} />
        <Route path="*" component={() => <h1>Page Not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
