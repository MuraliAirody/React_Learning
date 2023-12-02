import { useEffect, useState } from "react";
import "./App.css";
import { ToDoContextProvider } from "./context/index";
import TodoInput from "./component/ToDoInput";
import TodoList from "./component/ToDoList";

import AlertCom from "./component/AlertCom";

function App() {
  const [todos, setToDos] = useState([]);
  const [openAlert,setOpenAlert] = useState(null)

  const handleAlert=(message,type)=>{
    setOpenAlert({
       msg:message,
       type:type
    })

    setTimeout(()=>{
      setOpenAlert(null)
    },1500)
  }

  const addToDo = (todo) => {
    console.log(todo);
    setToDos((todos) => [{ id: Date.now(), todo, completed: false }, ...todos]);
    handleAlert("To Do added Successfuly","success")
  };

  const updateToDo = (id, todo) => {
    setToDos((todos) =>
      todos.map((currentTodo) => (currentTodo.id === id ? todo : currentTodo))
    );

    handleAlert("To Do upadted Successfuly","info")

  };

  const deleteToDo = (id) => {
    setToDos((todos) => todos.filter((currentTodo) => currentTodo.id != id));

    handleAlert("To Do deleted Successfuly","error")

  };

  const checkComplete = (id) => {
    setToDos((todos) =>
      todos.map((currentTodo) =>
        currentTodo.id === id
          ? { ...currentTodo, completed: !currentTodo.completed }
          : currentTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setToDos(todos);
    }
    console.log(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <ToDoContextProvider
        value={{ todos, addToDo, updateToDo, deleteToDo, checkComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">

        <AlertCom openAlert={openAlert}></AlertCom>

          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {" "}
              <TodoInput></TodoInput>{" "}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoList todo={todo}></TodoList>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ToDoContextProvider>
    </>
  );
}

export default App;
