import React from 'react'
import useTodoState from './useTodoState';
import TodoItem from './TodoItem';

const TodoList = React.memo(() => {
    const { todos } = useTodoState();
    return (
      <div>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    );
  });

  export default TodoList;
