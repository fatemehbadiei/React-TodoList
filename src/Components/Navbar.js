// const Navbar = ({onCompletedTodos}) => {
//     return (
//         <header>
//             {onCompletedTodos
//                 ?
//                 <>
//                     <span>{onCompletedTodos}</span>
//                     <h2>Todos aren't completed</h2>
//                 </>
//                 :
//                 <h2>Set your today's todos</h2>
//             }
//         </header>
//     )
// }
//
// export default Navbar;


//way 2


// const Navbar = ({onCompletedTodos,onSelect,status}) => {
//
//     if (!onCompletedTodos) return <h2>Set your today's todos</h2>
//     return (
//         <header>
//             <span>{onCompletedTodos}</span>
//             <h2>Todos aren't completed</h2>
//             <select onChange={onSelect} value={status}>
//                 <option value="all">All</option>
//                 <option value="completed">Completed</option>
//                 <option value="onCompleted">OnCompleted</option>
//             </select>
//         </header>
//     )
// }
//
// export default Navbar;


//write this code with react-select

import Select from 'react-select';

const options = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'OnCompleted', label: 'onCompleted' },
];

const Navbar = ({onCompletedTodos,onSelect,selectedOption}) => {

    if (!onCompletedTodos) return <h2>Set your today's todos</h2>
    return (
        <header>
            <span>{onCompletedTodos}</span>
            <h2>Todos aren't completed</h2>
            <Select
                value={selectedOption}
                onChange={onSelect}
                options={options}
                className="select"
            />
        </header>
    )
}

export default Navbar;