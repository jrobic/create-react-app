import React, { Component } from 'react';

import logo from './logo.svg';
import { Container, Header, Title, Intro, Logo } from './App.style';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />
          <Title className="App-title">Welcome to React</Title>
        </Header>
        <Intro className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Container>
    );
  }
}

export default App;
