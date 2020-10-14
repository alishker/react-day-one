import React, { Component } from 'react';
import Todoitem from './Todoitem';


export default class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} />

        ));
    }
}


