// import {useEffect, useRef, useState} from "react";
//
// const TodoForm = (props) => {
//
//     const [input, setInput] = useState("");
//
//     const inputRef = useRef(null);
//     useEffect(()=>{
//         inputRef.current.focus();
//     },[])
//
//     const changeHandler = (e) => {
//         setInput(e.target.value);
//     }
//
//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (!input) {
//             alert("Fill Input");
//             return
//         }
//         props.submitTodo(input);
//         setInput("")
//     }
//
//     return (
//         <form onSubmit={submitHandler}>
//             {props.edit ?
//                 <>
//                     <input type="text" value={input} onChange={changeHandler} placeholder="Update todo..." ref={inputRef}/>
//                     <button>Update</button>
//                 </>
//                 :
//                 <>
//                     <input type="text" value={input} onChange={changeHandler} placeholder="Add todo..." ref={inputRef}/>
//                     <button>Add</button>
//                 </>
//             }
//         </form>
//     )
// }
//
// export default TodoForm;

//way2 for write new todos

// import {useState} from "react";
//
// const TodoForm = (props) => {
//
//     const [input, setInput] = useState("");
//
//     const changeHandler = (e) => {
//         setInput(e.target.value);
//     }
//
//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (!input) {
//             alert("Fill Input");
//             return
//         }
//
//         const newTodo = {
//             id: Math.floor(Math.random() * 1000),
//             text: input,
//             isCompleted: false
//         };
//
//         props.setTodos([...props.todos, newTodo]);
//
//         setInput("")
//     }
//
//     return (
//         <form onSubmit={submitHandler}>
//             <input type="text" value={input} onChange={changeHandler}/>
//             <button>Add</button>
//         </form>
//     )
// }
//
// export default TodoForm;

//way2 for writing form with props.edit

import {useEffect, useRef, useState} from "react";

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.text : "");

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const changeHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (!input) {
            alert("Fill Input");
            return
        }
        props.submitTodo(input);
        setInput("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="formControl">
                <input
                    type="text"
                    value={input}
                    onChange={changeHandler}
                    placeholder={props.edit ? "Update Todo" : "Add Todo"}
                    ref={inputRef}
                />
                <button type="submit" className={`btn ${props.edit ? "editTodo" : "addTodo"}`}>{props.edit ? "Update" : "Add"}</button>
            </div>
        </form>
    )
}

export default TodoForm;