import { useReducer, useState } from "react";
import "./App.css";

const actions={
   ADD_TODO_ACTION:"ADD_TODO",
   DELETE_TODO:"DELETE_TODO",
   RESET_TODO:"RESET_TODO"
}

function App() {
  const [todo, setToDo] = useState("");
  const initialState = [];

  function reducer(state, action) {
    switch (action.type) {
      case actions.ADD_TODO_ACTION:
        return [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ];
      case actions.DELETE_TODO:return state.filter((todo)=>todo.id!=action.payload);
      case actions.RESET_TODO:return init(action.payload)
      default:return state  
    }
  }

  function init(initialState){
    return initialState;
  }

  const [todos, dispatch] = useReducer(reducer, initialState, init);

  function submitTodo(e) {
    e.preventDefault();
    dispatch({
      type: actions.ADD_TODO_ACTION,
      payload: todo,
    });
    setToDo("")
  }
  function deleteToDo(id){
    dispatch({
      type:actions.DELETE_TODO,
      payload:id
    })    
  }
  function handleTodo(e) {
    setToDo(e.target.value);
  }
  return (
    <>
      <h3>Number of ToDo's:{todos.length}</h3>
      <button onClick={()=>dispatch({type:actions.RESET_TODO,payload:initialState})}>Reset</button>
      <form onSubmit={submitTodo}>
        <input type="text" value={todo} onChange={handleTodo} />
        <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name}
          <button onClick={()=>deleteToDo(todo.id)}>delete</button>
        </li>
      ))}
    </>
  );
}

export default App;
