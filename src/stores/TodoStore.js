import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 113464613,
                text: 'Go Shopping',
                complete: false
            },
            {
                id: 235684679,
                text: 'Pay Bills',
                complete: false
            }
        ]
    }
    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false
        })

        this.emit('change');
    }
    getAll() {
        return this.todos;
    }

    handleActions(action) {
        switch (action.type) {
            case 'CREATE_TODO': {
                this.createTodo(action.text);
                break;
            }
            default: {
                break;
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.todoStore = todoStore;
window.dispatcher = dispatcher;

export default todoStore;