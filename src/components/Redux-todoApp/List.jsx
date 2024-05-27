import {connect} from 'react-redux';
import { deleteTodo, editTodo } from './reducer';

function List(props) {
    const {todoList, dispatch, inputRef, value, setValue} = props;

    const onTodoClick = (event) => {
        const currentElement = event.target;
        if (currentElement.tagName === 'BUTTON') {
            switch (currentElement.innerText) {
                case 'edit': {
                    const currentTodo = todoList.find(todo => todo.id === Number(currentElement.id));
                    setValue(currentTodo.title);
                    // dispatch(editTodo(value, Number(currentElement.id)))
                    inputRef?.current.focus()
                }
                    break;
                case 'delete': dispatch(deleteTodo(Number(currentElement.id)))
                    break;
            }
        }
    }

    return <div className="todo-list" onClick={onTodoClick}>
        {
            todoList.map((todo, index) => {
                const { task, id } = todo;
                return <div className="todo" key={`title-${index}`} id={id}>
                    <div className="todo-title">{task}</div>
                    <button className="todo-edit button" id={id}>edit</button>
                    <button className="todo-delete button" id={id}>delete</button>
                </div>
            })
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
        todoList: state ?? []
    }
}

export default connect(mapStateToProps)(List);