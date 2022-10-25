import React from 'react'
import TodoContext from './TodoContext';

function useTodoAction() {
    const { dispatch } = React.useContext(TodoContext);
  
    function addTodo(title) {
      // api call can be added here
      dispatch({
        type: 'add',
        payload: title,
      });
    }
  
    return {
      addTodo,
    };
  }

  export default useTodoAction