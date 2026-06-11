import React, { useState } from 'react'

export const AddToDo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc) {
            props.showAlert("danger", "Title and Description cannot be blank.");
        }else {
            props.addToDo(title, desc);
            props.showAlert("success", "Todo added successfully!");
            setTitle("");
            setDesc("");
        }
    }

  return (

    
    <div className="container">
        <h3>Add a ToDo</h3>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}
