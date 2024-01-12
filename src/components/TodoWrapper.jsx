import { useState } from 'react';
import TodoForm from './TodoForm.jsx'
import Todo from './Todo.jsx';
import ChangeTodo from './ChangeTodo.jsx'
import {nanoid} from 'nanoid'


const TodoWrapper = () => {

    const [todos, setTodos] = useState(localStorage.getItem('todos')?
     JSON.parse(localStorage.getItem('todos')) : [])
    

     const setTodosWithSave = (newTodos) => {
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
     }


    const addTodo = (value) => {
        setTodosWithSave([...todos, {id:nanoid(),
        task: value, isEdit: false, isDone: false}])
        console.log(todos)
       
    }

    const removeTodo = (id) => {
        setTodosWithSave(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodosWithSave(todos.map(todo => todo.id === id ? {...todo,
        isEdit: !todo.isEdit} : todo))
    }

    const toggleChecked = (id) => {
         setTodosWithSave(todos.map(todo => todo.id === id ? {...todo,
        isDone: !todo.isDone} : todo))
    }

    const changeTask = (task, id) => {
      setTodosWithSave(todos.map(todo => todo.id === id? {...
    todo, task, isEdit: !todo.isEdit } : todo))
    }

    return ( 
        <div className="todoWrapper">
            <h1>Todo-List</h1>
            <div className='container'>
            <TodoForm addTodo={addTodo}/>
            {todos.map(todo => (
               todo.isEdit ? (
                <ChangeTodo key={nanoid()}
                changeTask={changeTask}
                todo={todo}/>
               ): (
                <Todo key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                toggleChecked={toggleChecked}/>
               )
            ))}
            </div>
            
        </div>
     );
}
 
export default TodoWrapper;