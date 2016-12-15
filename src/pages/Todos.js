import React, { Component } from 'react';
import Todo from '../components/Todo';
import TodoStore from '../stores/TodoStore';

export default class Todos extends Component {
  constructor(){
    super();
    this.state = {
      todos: TodoStore.getAll()
    }
  }
  
  componentWillMount() {
    TodoStore.on('change', ()=>{
      this.setState({
        todos: TodoStore.getAll()
      })
    });
    
  }
  
  render() {
    const {todos} = this.state;
    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });

    return (
      <div>
        <h4>Todos</h4>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

