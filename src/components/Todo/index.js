import React, { Component } from 'react';

export default class Todo extends Component {
    render(){
        const {todo, handleChange} = this.props;
        return (
            <div>
                <input type="checkbox" checked={todo.done} onChange={(event) => {handleChange(todo, event.target.checked)}}/>
                {todo.content}
            </div>
        )
    }
}
