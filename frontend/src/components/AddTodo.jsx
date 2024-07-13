import { Button, TextField } from '@mui/material';
import React, { useRef } from 'react'

const AddTodo = ({setTodos}) => {


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

    if (response.ok) {
      setTodos(todos => [...todos, todo]);
      title.current.value = ""
      description.current.value = ""
      
    }

  }

  return (
    <div>

        <TextField id="title" label="Title" variant="outlined" inputRef={title}/>

        <br/><br/>

        <TextField id="description" label="Description" variant="outlined" inputRef={description}/>

        <br/><br/>

        <Button variant="contained" onClick={()=>addtodo()}>
          Add Todo
        </Button>

      

    </div>
  )
}

export default AddTodo