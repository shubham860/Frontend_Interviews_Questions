export const TodoActions = {
    ADD_TODO: 'ADD_TODO',
    EDIT_TODO: 'EDIT_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

let id = 0

export function addTodo(todo) {
    return {
        type: TodoActions.ADD_TODO,
        payload: { task: todo, id: ++id }
    }
}
export function deleteTodo(id) {
    return {
        type: TodoActions.DELETE_TODO,
        payload: { id }
    }
}
export function editTodo(todo, id) {
    return {
        type: TodoActions.EDIT_TODO,
        payload: { task: todo, id }
    }
}

export const reducers = (state = [], actions) => {
    switch (actions.type) {
        case TodoActions.ADD_TODO: return [...state, actions.payload];
        case TodoActions.DELETE_TODO: {
            const updatedTodos = state.filter(todo => todo.id !== actions.payload.id);
            return updatedTodos;
        }
        case TodoActions.EDIT_TODO: {
            const updatedState = [...state];
            const currentTask = updatedState.find(todo => todo.id === actions.payload.id);
            currentTask.task = actions.payload.task;
            return updatedState;
        }
    }
}