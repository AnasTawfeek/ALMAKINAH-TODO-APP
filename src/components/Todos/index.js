import React, { Component } from 'react';
import Todo from '../Todo';

export default class Todos extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: '',
            todos: [
                {
                    content: 'This is the first todo',
                    done: false
                },
                {
                    content: 'This is the second todo',
                    done: true
                }
            ]
        }
    }
    _handleChange(changedTodo, done){
        var todos = this.state.todos.slice(0);
        todos = todos.map((todo) => {
            if(todo == changedTodo) {
                todo.done = done;
            }
            return todo;
        });
        this.setState({todos});
    }
    _handleNewTodo(event){
        this.setState({newTodo: event.target.value});
    }
    _handleAddTodo(){
        const {newTodo, todos} = this.state;
        this.setState({
            todos: [
                {
                    content: newTodo,
                    done: false
                },
                ...todos
            ],
            newTodo: ''
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.newTodo} onChange={this._handleNewTodo.bind(this)}/>
                <button onClick={this._handleAddTodo.bind(this)}>Add Todo</button>
                {
                    this.state.todos.map((todo) => {
                        return  (
                            <Todo todo={todo} handleChange={this._handleChange.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}
