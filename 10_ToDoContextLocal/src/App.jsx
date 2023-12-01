import { useEffect, useState } from "react";
import "./App.css";
import { ToDoContextProvider } from "./context/index";
import TodoInput from "./component/ToDoInput";
import TodoList from "./component/ToDoList";

function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    console.log(todo);
    setToDos((todos) => [{ id: Date.now(), todo, completed: false }, ...todos]);
  };

  const updateToDo = (id, todo) => {
    setToDos((todos) =>
      todos.map((currentTodo) => (currentTodo.id === id ? todo : currentTodo))
    );
  };

  const deleteToDo = (id) => {
    setToDos((todos) => todos.filter((currentTodo) => currentTodo.id != id));
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
