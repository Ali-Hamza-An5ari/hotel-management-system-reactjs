import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
  return (
    <div>Todos
        <Todo todo={props.todos[0]}/>

    </div>
  )
}
