import React, { useEffect, useState } from 'react'

const ShowTodo = () => {

  const [todos,setTodos] = useState([]);

  const deleteTodo = async(id)=>{

    const response = await fetch("http://localhost:3000/todos", {
      method : "DELETE",
      body: JSON.stringify({id : id}),
      headers: {
          "Content-Type": "application/json"
      }
    })

    getTodos();

  }

  const getTodos = async()=>{
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  }

  useEffect(()=>{
    getTodos();
  },[]);

  return (
    <div>
        <table style={{border:"1px solid black"}}>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>

            {
                todos.map((todo)=>{
                    return <tr>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                </td>
                           </tr>
                })
            }
            
        </table>
    </div>
  )
}

export default ShowTodo