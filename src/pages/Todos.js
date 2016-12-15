import React, { Component } from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Todos extends Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()      
    }
  }

  componentWillMount() {
    TodoStore.on('change', this.getTodos);    
  }

  componentWillUnmount() {
    TodoStore.removeListener('change', this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }

  onChangeInput(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const {todos} = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload</button>

        <h4>Todos</h4>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

