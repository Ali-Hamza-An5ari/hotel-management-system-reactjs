import React from 'react'
import TodoContext from './TodoContext';

export default function useTodoState() {
    const { state } = React.useContext(TodoContext);
  
    const completed = state.data.filter((todo) => todo.done).length;
  
    return {
      todos: state.data,
      isLoading: state.isLoading,
      error: state.error,
      totalTodos: state.data.length,
      completedTodos: completed,
      todosLeft: state.data.length - completed,
    };
  }