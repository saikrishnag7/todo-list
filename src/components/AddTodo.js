import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo  } from '../todoSlice'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [input ,setInput] = useState('')

    const addTOdo = (e) =>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')

    }
  return (
    <div className='justify-center'>
<form onSubmit={addTOdo} className ="space-x-3 mt-12 flex justify-center">
  <input
  type ="text"
  className="bg-gray-800 rounded border w-1/3
  border-gray-700 ☐ focus: border-indigo-500
  focus: ring-2 ☐ focus: ring-indigo-900 text-base
  outline-none text-gray-100 py-1 px-3 leading
  transition-colors duration-200 ease-in-out"
  placeholder="Enter a Todo..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  />
<button
type="submit" I
className="text-white bg-indigo-500 border-0
py-2 px-6 focus: outline-none
hover:bg-indigo-600 rounded text-lg">
Add Todo
</button>
</form>
</div>


 
   )
    
  
}

export default AddTodo