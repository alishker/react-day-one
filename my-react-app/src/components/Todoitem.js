import React, { Component } from 'react'

export class Todoitem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    }
    render() {
        const { id, title } = this.props.todo;

        return (


            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title} </p>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        );

    }
}
const btnStyle = {
    background: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '5px 8px',
    cursor: 'pointer',
    float: 'right',
    border: 'none',
    align: 'center'


}
export default Todoitem
