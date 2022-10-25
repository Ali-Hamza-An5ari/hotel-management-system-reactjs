import React from 'react'
import todoReducer from './todoReducer'
import TodoContext from './TodoContext';

export function useTodo(initialState = []) {
    const [state, dispatch] = React.useReducer(todoReducer, {
      data: initialState,
      isLoading: false,
      error: false,
    });
  
    return {
      state,
      dispatch,
    };
  }
  
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
