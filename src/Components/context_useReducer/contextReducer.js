
 import { useTodo } from './todoReducer';

 const TodoContext = React.createContext();
 
 function ContextsProvider(props) {
   return (
     <TodoContext.Provider value={useTodo()}>
       {props.children}
     </TodoContext.Provider>
   );
 }
 

function todoReducer(state, action) {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          data: [
            ...state.data,
            { name: action.payload, done: false, id: state.data.length + 1 },
          ],
        };
      case 'delete':
        return {
          ...state,
          data: state.data.filter((todo) => todo.id !== action.payload)
        };
      case 'complete':
        return {
          ...state,
          data: state.data.map((todo) => {
            if (todo.id === action.payload) {
              todo.done = true;
              return todo;
            }
            return todo;
          }),
        };
      case 'not_complete':
        return {
          ...state,
          data: state.data.map((todo) => {
            if (todo.id === action.payload) {
              todo.done = false;
              return todo;
            }
            return todo;
          }),
        };
      default:
        return {
          data: [],
          isLoading: false,
          error: false,
        }
    }
  }
  
  function useTodoState() {
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