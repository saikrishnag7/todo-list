import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return ( //two componets are rendered
    <div>
      <AddTodo/>
      <Todos/>    
    </div>
  )
}

export default App