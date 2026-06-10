import React from 'react'

export const ToDo = ({todo, onDelete, onEdit}) => {
  return (
    <div className="border border-dark my-3 p-3 rounded bg-light">
      <h3>S.No. {todo.sno}</h3>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-primary" onClick={() => onEdit(todo)}>Edit</button>
      <button className="btn btn-sm btn-danger mx-2" onClick={() => onDelete(todo)}>Delete</button>
    </div>
  )
}
