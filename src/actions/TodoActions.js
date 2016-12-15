import dispatcher from '../dispatcher';

export function createTodo(text) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text
    })
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id
    })
}

export function reloadTodos() {
    dispatcher.dispatch({
        type: 'FETCH_TODOS'
    })
    setTimeout(() => {
        dispatcher.dispatch({
            type: 'RECEIVE_TODOS',
            todos: [{
                id: 113464613,
                text: 'Go Shopping FROM RELOAD',
                complete: false
            },
            {
                id: 235684679,
                text: 'Pay Bills FROM RELOAD',
                complete: true
            }]
        });

        if (false) {
            dispatcher.dispatch({ type: 'RECEIVE_TODOS_ERROR' })
        }
    }, 1000);
}