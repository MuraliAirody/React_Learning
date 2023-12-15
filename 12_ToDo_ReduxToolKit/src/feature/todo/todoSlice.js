import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      todoName: "Learn Redux",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      console.log("adding to do ",action.payload);
      const todo = {
        id: nanoid(),
        todoName: action.payload,
      };
      state.todos = [...state.todos,todo]
      console.log(state);
    },
    removeToDo:(state,action)=>{
        state.todos=state.todos.filter((todo)=> todo.id!=action.payload)
    }
  },
});

export const {addToDo,removeToDo} = todoSlice.actions

export default todoSlice.reducer
