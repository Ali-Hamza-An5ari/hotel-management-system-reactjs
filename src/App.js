// //import React, { useState } from 'react'
import Restaurant from './Components/basics/Restaurant'

import React from 'react'
import Navbar from './Components/basics/Navbar'
import NavbarBalance from './Components/Redux/NavbarBalance'
import Shop from './Components/Redux/Shop'
import Counter from './Components/Redux/Counter'
// import AntProgress from './Components/AntDesign/AntProgress';
// import SearchBarAnt from './Components/AntDesign/SearchBarAnt';
// import SortingObjects from './Components/AntDesign/SortingObjects';
// import TShirtBrands from './Components/AntDesign/TShirtAPI';
// import ClickCounter from './HigherOrderComponent/ClickCounter';
// import Head1 from './HigherOrderComponent/Head1';
// import './index.css';

// const App = () => {

//   return (
//     <>
//     <h1>App {4+10}</h1> 
//     {/* <Progress percent={30} /> */}
//     {/* <h2>a</h2> */}
    //  <Restaurant/> 
//     {/* <AntProgress/> */}
//     {/* <SearchBarAnt/> */}
//     {/* <SortingObjects TShirtBrands={TShirtBrands}/> */}
//     {/* <h2>a</h2> */}
//     {/* <ClickCounter/> */}
//     {/* <Head1/> */}
//     </>
//   )
// }

// export default App

////////////////////////////////////////
// import React, { useReducer } from "react";
//  const products = [{
//    id:1,
//    name:"Ralph Loren",
//    price:500
//  },
//  {
//    id:2,
//    name:"VL",
//    price:1000
//   },
//   {
//     id:3,
//     name:"Lacoste",
//     price:400
//   }
// ]
// // Defining the initial state and the reducer
// const initialState = 0;
// const reducer = (state, action) => 
// {              
//   switch (action) {
//     case "add":
//       return state + 1; 
//     case "subtract":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       throw new Error("Unexpected action");
//   }
// };

// const App = () => {
//     // Initialising useReducer hook
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => dispatch("add")}>
//         add
//       </button>
//       <button onClick={() => dispatch("subtract")}>
//         subtract
//       </button>
//       <button onClick={() => dispatch("reset")}>
//         reset
//       </button>
//     </div>
//   );
// };
 
// export default App;


////////////////////
// const intialState = 0;
// const reducer = (state, action) =>
// {

// }

////////////////
// function App() {
//   // const [count, dispatch] = 
//   return (
//     <>
//       <h1>a</h1>
//     </>

//   )
// }

// export default App

///////////////////////
// import TodoList from './Components/context_useReducer/TodoList'
// import useTodoAction from './Components/context_useReducer/useTodoAction'
// import useTodoState from './Components/context_useReducer/useTodoState'
// import React, { useReducer } from "react";


// export default function App() 
// {
  
//   const { addTodo } = useTodoAction()
//   const [newTodoName, setNewTodoName] = React.useState('');
//   const { completedTodos, totalTodos } = useTodoState();
//   return (
//     <div>
//       <span>
//         <input
//           value={newTodoName}
//           onChange={(e) => setNewTodoName(e.target.value)}
//         />
//         <button
//           onClick={() => {
//             addTodo(newTodoName);
//             setNewTodoName('');
//           }}
//         >
//           add
//         </button>
//         <br/>
//       </span>
//       <br />
//       {' '}
//         {completedTodos} / {totalTodos}{' '}
//       <br />
//       <TodoList />
//     </div>
//   );
// }

//////////////////////////////

function App() {
  return (
    <>
      {/* <h2>aa</h2> */}
      {/* <NavbarBalance/>
      <Shop/> */}
      {/* <Restaurant/>  */}
      <Counter/>
    </>
  )
}

export default App