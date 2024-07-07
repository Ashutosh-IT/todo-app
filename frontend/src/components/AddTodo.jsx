import React, { useRef } from 'react'

const AddTodo = () => {


  const title = useRef();
  const description = useRef();


  const addtodo = async()=>{

    if(title.current.value.length == 0 || description.current.value.length == 0) return;

    const todo = {
      title : title.current.value,
      description : description.current.value
    }

    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    });

  }

  return (
    <div>

      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={title}/>

        <br/><br/>

        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={description}/>

        <br/><br/>

        <button onClick={addtodo}>Add Todo</button>
      </form>

    </div>
  )
}

export default AddTodo