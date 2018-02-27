import React, { Component } from 'react';
import Ipsum from './Ipsum';
import './App.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      paragraphs: 2
    }
  }

  render() {
    return (
      <div>
        Gerar
        <input 
          type="number"
          value={this.state.paragraphs}
          min='1'
          onChange={event => { this.setState({paragraphs: event.target.value}) }}
        />
        paragrafos
        <br />
        <button>Acreditar nos meus sonhos</button>
        <br />
        <Ipsum paragraphs={this.state.paragraphs} />
      </div>
    )
  }
}

export default App;