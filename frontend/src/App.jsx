import React from 'react'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'

const App = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <AddTodo/>
      <br/>
      <ShowTodo/>
    </div>
  )
}

export default App