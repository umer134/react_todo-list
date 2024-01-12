import { faCheck, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({todo, removeTodo, editTodo, toggleChecked}) => {
    return ( 
        <div className="todo-item">
            {todo.isDone ?
            (<div className="todo">
               <div className="checkBox" onClick={() => toggleChecked(todo.id)}>
               <FontAwesomeIcon icon={faCheck} className="todo-done"/>
               </div>
                 <p className="todo-task completed">{todo.task}</p>
                 <div className="icons">
                 <FontAwesomeIcon icon={faPencil} className="todo-pencil"
                  onClick={() => editTodo(todo.id)}/>
                 <FontAwesomeIcon icon={faTrash} className="todo-trash"
                  onClick={() => removeTodo(todo.id)}/>
                 </div>
               </div>  
            ) : (
                <div className="todo">
                <div className="checkBox" onClick={() => toggleChecked(todo.id)}>
                </div>
                <p className="todo-task">{todo.task}</p>
                <div className="icons">
                <FontAwesomeIcon icon={faPencil} className="todo-pencil" 
                 onClick={() => editTodo(todo.id)}>edit</FontAwesomeIcon>
                <FontAwesomeIcon icon={faTrash} className="todo-trash"
                 onClick={() => removeTodo(todo.id)}/>
                </div>
                </div>
            )  
            }
            </div>
     );
}
 
export default Todo;