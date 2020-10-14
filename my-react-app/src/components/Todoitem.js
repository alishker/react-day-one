import React, { Component } from 'react'

export class Todoitem extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.todo.title} </h3>
            </div>
        )
    }
}

export default Todoitem
