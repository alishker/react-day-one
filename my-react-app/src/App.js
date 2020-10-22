import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
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
      completed: true
    },
    {
      id: 3,
      title: "finish react project",
      completed: false
    }]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo;
      })
    });
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id

      )]
    });

  }
  addTodo = (title) => {

    const newTodo = {
      id: 5,
      title,
      completed: false
    }
    this.setState({

      todos: [...this.state.todos, newTodo]
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>

    );
  }
}


