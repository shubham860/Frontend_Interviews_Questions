import CreateTodo from "./CreateTodo";
import List from "./List";
import { useRef, useState } from "react";

export default function ReduxTodoList() {
    const [value, setValue] = useState('');
    const inputRef = useRef()
    return <div className='todo-container'>
        <div className="todo-data">
            <CreateTodo setValue={setValue} value={value} inputRef={inputRef} />
            <List inputRef={inputRef} setValue={setValue} value={value} />
        </div>
    </div >
}