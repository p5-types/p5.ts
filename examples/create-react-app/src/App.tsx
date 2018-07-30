import * as React from 'react';
import './App.css';

import * as p5 from 'p5'
import sketch from "./p5/sketch";
import P5Wrapper from "./p5/wrapper";

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <P5Wrapper sketch={sketch} onP5Changed={this.onP5Changed} />
      </div>
    );
  }

  private onP5Changed = (p: p5) => {
    // tslint:disable:no-console
    console.log(p5)
  }
}

export default App;
