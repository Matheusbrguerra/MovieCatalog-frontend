import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ContainerApp, ButtonLink, List } from "./styles";

export default class Navbar extends Component {
  render() {
    return (
      <ContainerApp>
        <List>
          <li>
            <ButtonLink>
              <Link to="/app">MovieCatalog</Link>
            </ButtonLink>
          </li>
          <li>Meu saco</li>
        </List>
      </ContainerApp>
    );
  }
}
