import { useEffect, useRef, useState } from "react";
import './index.css';

let id = 0;

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [value, setValue] = useState('');
    const [addMode, setAddMode] = useState(true);
    const [currentTodo, setCurrentTodo] = useState(null);
    const inputRef = useRef(null);
    const [error, setError] = useState('');


    const onAdd = (event) => {
        if(!value) {
            setError('please enter your task');
            return;
        }
        const currentElement = event.target;
        if(currentElement.tagName === 'BUTTON') {
            if(currentElement.innerText === 'Add') {
                setTodoList(prev => [...prev, {title: value.trim(), id}]);
                setValue('');
                ++id;
            } else if(currentElement.innerText === 'Save') {
                const updatedTodo = [...todoList];
                const currTodo = updatedTodo.find(todo => todo.id === Number(currentTodo));
                currTodo.title = value;
                setTodoList(updatedTodo);
                setValue('');
                setCurrentTodo(null);
                setAddMode(true);
            }
            inputRef?.current.focus();
            setError('');
        }
    };

    const onInputChange = (event) => {
        const value = event.target.value;
        setValue(value)
    }

    const onTodoClick = (event) => {
        const currentElement = event.target;
        if(currentElement.tagName === 'BUTTON') {
            switch(currentElement.innerText) {
                case 'edit' : {
                    const currentTodo = todoList.find(todo => todo.id === Number(currentElement.id));
                    setAddMode(false);
                    setValue(currentTodo.title);
                    setCurrentTodo(Number(currentElement.id))
                    inputRef?.current.focus()
                }
                    break;
                case 'delete': setTodoList(todoList.filter(todo => todo.id !== Number(currentElement.id)))
                    break;
            }
        }
    }

    useEffect(() => {
        let timerId = setTimeout(() => {
            setError('');
        }, 400);

        return () => clearTimeout(timerId);
    }, [error])

    useEffect(() => {
        inputRef?.current.focus()
    }, [])

    return <div className='todo-container'>
        <div className="todo-data">
            <div className="search-container">
                <input type="text" value={value} className='todoinput' onChange={onInputChange} placeholder="Type your task here" ref={inputRef}/>
                <button className="button" onClick={onAdd}>{addMode ? 'Add' : 'Save'}</button>
            </div>
            <div className="error">{error}</div>
            <div className="todo-list" onClick={onTodoClick}>
                {
                    todoList.map((todo, index) => {
                        const { title, id } = todo;
                        return <div className="todo" key={`title-${index}`} id={id}>
                            <div className="todo-title">{title}</div>
                            <button className="todo-edit button" id={id}>edit</button>
                            <button className="todo-delete button" id={id}>delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}