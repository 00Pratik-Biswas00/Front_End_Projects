import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    // Retrieve the todos from localStorage
    const savedTodos = localStorage.getItem("todos");
    // If there are saved todos, parse them and return, otherwise return an empty array
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center  bg-[#0C0C0C] md:h-screen py-3">
      <div className=" w-[15rem] md:w-[25rem] xl:w-[32rem]  flex flex-col xl:flex-row items-center justify-center">
        <div className="flex flex-col items-center xl:items-start justify-center">
          <h3 className="text-xl md:text-2xl uppercase font-medium mb-2 tracking-wide text-[#00ffff]">
            CSI Assignment 2
          </h3>
          <h4
            className="text-[30px] lg:text-[60px] font-bold leading-none mb-12
              text-center xl:text-left text-[#fff]"
          >
            Create a dynamic
            <br /> To-do list app!
          </h4>
        </div>
      </div>
      <div className="TodoWrapper">
        <h1>Get Things Done !</h1>
        <TodoForm addTodo={addTodo} />
        {/* display todos */}
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TodoWrapper;
