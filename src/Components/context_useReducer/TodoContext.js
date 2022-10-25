// import { useTodo } from './todoReducer';
import {useTodo} from './useTodo'
import React from 'react'

const TodoContext = React.createContext();

function ContextsProvider(props) {
  return (
    <TodoContext.Provider value={useTodo()}>
      {props.children}
    </TodoContext.Provider>
  );
}
export default TodoContext