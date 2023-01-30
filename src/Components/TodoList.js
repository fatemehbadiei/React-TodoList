import Todo from "./Todo";
import {useState} from "react";
import TodoForm from "./TodoForm";

const TodoList = ({todos, onComplete, onDelete,onUpdateTodo}) => {

    const[edit,setEdit] = useState({id:null,text:"",isCompleted:false});

    const editTodo = (newValue) => {
        onUpdateTodo(edit.id,newValue);
        setEdit({id:null,text:"",isCompleted:false})
    }

    const renderTodo = () => {
        if (todos.length === 0) return <p>Add some todos</p>;
        return todos.map((todo) => {
            return (
                <Todo
                    todo={todo}
                    key={todo.id}
                    onComplete={() => onComplete(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onEdit={()=> setEdit(todo)}
                />
            );
        });

    }

    return <div>{edit.id ? <TodoForm submitTodo={editTodo} edit={edit}/> : renderTodo()}</div>

}

export default TodoList;