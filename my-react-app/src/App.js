import React, { Component } from 'react'
import Todos from './components/Todos'
import './App.css'


export default class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: "wash clothes",
      completed: false
    },
    {
      id: 2,
      title: "write a django blog",
      completed: false
    },
    {
      id: 3,
      title: "finish react project",
      completed: false
    }]
  }




  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>

    );
  }
}


