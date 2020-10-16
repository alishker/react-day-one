import React, { Component } from 'react'

export class Todoitem extends Component {

    getStyle = () => {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: ' 1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markCompleted = (e) => {

    }


    render() {
        return (
            <div style={this.getStyle()} >
                <h3> <input type="checkbox" onChange='markCompleted' /> {' '}
                    {this.props.todo.title}
                </h3>
            </div>
        )
    }
}

export default Todoitem
