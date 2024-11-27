import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[{ id: 1, text: "Add, Edit, Delete values " }]
    // todos:[]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
           const toDo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(toDo)
        },

        removeToDo: (state, action) => {

            state.todos = state.todos.filter((todo)=>todo.id !== action.payload )
            console.log(action.payload, "payloadddddddd")
        },
        
        editToDo: (state, action) => {
            const { id, text } = action.payload;
            const existingToDo = state.todos.find((todo) => todo.id === id);
            if (existingToDo && text.trim()) {
                existingToDo.text = text;
            }
        }
        
    }



})

export const {addToDo, removeToDo, editToDo} = todoSlice.actions
export default todoSlice.reducer