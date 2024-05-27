import { connect } from "react-redux";
import { addTodo } from './reducer';

function CreateTodo(props) {
    const onInputChange = (event) => props.setValue(event.target.value);

    return <div className="search-container">
        <input type="text" value={props.value} className='todoinput' onChange={onInputChange} placeholder="Type your task here" ref={props.inputRef} />
        <button className="button" onClick={() => {
            props.dispatchTodo(props.value);
            props.setValue('')
        }}>
        {'Add'}</button>
    </div>
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchTodo: todo => dispatch(addTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(CreateTodo);