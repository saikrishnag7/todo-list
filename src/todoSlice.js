import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = { // initialsed the initialstate of todos
    todos:[],
}

export const todoSlice = createSlice({ // here created a store with name "todo"
    name : 'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{  //todo is added to the state in addition with nanoid which is used as key
            const todo = {
                id: nanoid(),
                text : action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{  // to remove a todo you need to give key/id as input to the dispatch
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }

        }
    }
)

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
