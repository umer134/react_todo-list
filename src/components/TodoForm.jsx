import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const TodoForm = ({addTodo}) => {

const [value, setValue] = useState('')

const addingTask = (event) => {
    event.preventDefault()
    if(value) {
        addTodo(value)
        setValue('')
    }
}

    return ( 
        <form className="todo-form">
            <input className="todo-input" type="text"
             placeholder="Write task..."
            value={value} 
            onChange={(e) => setValue(e.target.value)}/>
            <FontAwesomeIcon className="todo-plus" 
            icon={faPlus} onClick={addingTask}/>
        </form>
     );
}
 
export default TodoForm;