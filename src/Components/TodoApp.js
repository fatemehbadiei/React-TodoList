// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";
// import {useEffect, useState} from "react";
// import Navbar from "./Navbar";
//
//
// const TodoApp = () => {
//
//     const [todos, setTodos] = useState([]);
//     const [filter,setFilter] = useState([]);
//     const [status,setStatus] = useState("all");
//
//     useEffect(()=>{
//         filterTodos(status);
//     },[todos,status])
//
//     const addTodo = (input) => {
//
//         const newTodo = {
//             id: Math.floor(Math.random() * 1000),
//             text: input,
//             isCompleted: false
//         };
//
//         setTodos([...todos, newTodo]);
//     }
//
//     const completeHandler = (id) => {
//         const index = todos.findIndex(item => item.id === id);
//         const todo = {...todos[index]};
//         todo.isCompleted = !todo.isCompleted;
//         console.log(todo)
//         const UpdatedTodos = [...todos];
//         UpdatedTodos[index] = todo;
//         setTodos(UpdatedTodos)
//
//     }
//
//     const deleteHandler = (id) => {
//         const updatedTodos = todos.filter(todo => todo.id !== id);
//         setTodos(updatedTodos);
//     }
//
//     const updateTodo = (id,newValue) => {
//         const index = todos.findIndex(item => item.id === id);
//         const todo = {...todos[index]};
//         todo.text = newValue;
//         const UpdatedTodos = [...todos];
//         UpdatedTodos[index] = todo;
//         setTodos(UpdatedTodos)
//     }
//
//     const filterTodos = (status) => {
//         switch (status) {
//             case "completed":
//                 setFilter(todos.filter(todo => todo.isCompleted));
//                 break;
//             case "onCompleted" :
//                 setFilter(todos.filter(todo=> !todo.isCompleted));
//                 break;
//             default :
//                 setFilter(todos);
//         }
//     }
//
//     const selectHandler = (e) => {
//         setStatus(e.target.value);
//         filterTodos(e.target.value);
//     }
//
//     return (
//         <div className="container">
//             <Navbar
//                 onCompletedTodos={todos.filter(todo => !todo.isCompleted).length}
//                 onSelect={selectHandler}
//                 status={status}
//             />
//             <TodoForm submitTodo={addTodo}/>
//             <TodoList
//                 todos={filter}
//                 onComplete={completeHandler}
//                 onDelete={deleteHandler}
//                 onUpdateTodo={updateTodo}
//             />
//         </div>
//     )
// }
//
// export default TodoApp;


//way2

// import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";
// import {useState} from "react";
//
// const TodoApp = () => {
//
//     const [todos,setTodos] = useState([]);
//
//     return (
//         <div className="container">
//             <TodoForm todos={todos} setTodos={setTodos}/>
//             <TodoList/>
//         </div>
//     )
// }
//
// export default TodoApp;


//write this code with react-select


import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useEffect, useState} from "react";
import Navbar from "./Navbar";


const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [filter,setFilter] = useState([]);
    const [selectedOption,setSelectedOption] = useState("all");

    useEffect(()=>{
        filterTodos(selectedOption.value);
    },[todos,selectedOption]);

    const addTodo = (input) => {

        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: input,
            isCompleted: false
        };

        setTodos([...todos, newTodo]);
    }

    const completeHandler = (id) => {
        const index = todos.findIndex(item => item.id === id);
        const todo = {...todos[index]};
        todo.isCompleted = !todo.isCompleted;
        console.log(todo)
        const UpdatedTodos = [...todos];
        UpdatedTodos[index] = todo;
        setTodos(UpdatedTodos)

    }

    const deleteHandler = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    const updateTodo = (id,newValue) => {
        const index = todos.findIndex(item => item.id === id);
        const todo = {...todos[index]};
        todo.text = newValue;
        const UpdatedTodos = [...todos];
        UpdatedTodos[index] = todo;
        setTodos(UpdatedTodos);
    }

    const filterTodos = (status) => {
        switch (status) {
            case "completed":
                setFilter(todos.filter(todo => todo.isCompleted));
                break;
            case "onCompleted" :
                setFilter(todos.filter(todo=> !todo.isCompleted));
                break;
            default :
                setFilter(todos);
        }
    }

    const selectHandler = (e) => {
        setSelectedOption(e);
        filterTodos(e.value);
    }

    return (
        <div className="container">
            <Navbar
                onCompletedTodos={todos.filter(todo => !todo.isCompleted).length}
                onSelect={selectHandler}
                selectedOption={selectedOption}
            />
            <TodoForm submitTodo={addTodo}/>
            <TodoList
                todos={filter}
                onComplete={completeHandler}
                onDelete={deleteHandler}
                onUpdateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoApp;