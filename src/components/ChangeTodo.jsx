import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const Todo = ({changeTask, todo}) => {

const [value, setValue] = useState(todo.task)

const editTask = (event) => {
    event.preventDefault()
    if(value) {
        changeTask(value, todo.id)
        setValue('')
    }
}

    return ( 
        <form className="changeTodo-form">
            <input className="Update-todo-input"
             type="text" placeholder="Update task"
            value={value} 
            onChange={(e) => setValue(e.target.value)}/>
            <FontAwesomeIcon icon={faFloppyDisk} className="todo-save"
             onClick={editTask} type="sumbit"/>
        </form>
     );
}
 
export default Todo;