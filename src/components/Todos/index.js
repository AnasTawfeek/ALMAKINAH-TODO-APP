import React, { Component } from 'react';
import Todo from '../Todo';
import Axios from 'axios';

export default class Todos extends Component {
    constructor(){
        super();
        this.state = {
            newTodo: '',
            todos: [],
            loadingTodos: false
        }
    }
    _handleChange(id){
        // var todos = this.state.todos.slice(0);
        // todos = todos.map((todo) => {
        //     if(todo == changedTodo) {
        //         todo.done = done;
        //     }
        //     return todo;
        // });
        // this.setState({todos});

        // TODO: Update current state
        var todos = this.state.todos.slice(0);
        var done;
        todos = todos.map((todo) => {
            if(todo.id == id) {
                todo.done = !todo.done;
                done = todo.done;
            }
            return todo;
        });
        this.setState({todos});
        // TODO: Call POST api to update the database
        Axios.patch(`http://localhost:3001/todos/${id}`, {
            done: done
        })
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
    _fetchTodos(){
        this.setState({loadingTodos: true});

        setTimeout(() => {
            Axios.get('http://localhost:3001/todos')
            .then((response) => {
                this.setState({todos: response.data, loadingTodos: false})
            })
            .catch(function (error) {
                console.log(error);
            });
        }, 2000)
    }
    componentWillMount(){
        this._fetchTodos();
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.newTodo} onChange={this._handleNewTodo.bind(this)}/>
                <button onClick={this._handleAddTodo.bind(this)}>Add Todo</button>
                {
                    this.state.loadingTodos
                    ? (<div>Is Loading</div>)
                    : this.state.todos.map((todo) => {
                        return  (
                            <Todo todo={todo} handleChange={this._handleChange.bind(this)} />
                        )
                    })
                }
            </div>
        )
    }
}
