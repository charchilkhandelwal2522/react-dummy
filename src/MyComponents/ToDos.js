import React from 'react'
import { ToDo } from './ToDo'

export const ToDos = (props) => {
  let myStyle = {
    minHeight: "100vh"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">ToDos List</h3>
      {props.todos.length === 0 ? <p className="text-center">No todos to display</p> :
        props.todos.map((todo) => {
          return <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit} />
        })
      }
    </div>
  )
}
