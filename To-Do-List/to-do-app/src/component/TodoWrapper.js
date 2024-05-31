import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [sortOption, setSortOption] = useState("dateAdded");
  const [filterOption, setFilterOption] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        dateAdded: new Date(),
      },
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortOption === "dateAdded") {
      return new Date(b.dateAdded) - new Date(a.dateAdded);
    }
    if (sortOption === "alphabetically") {
      return a.task.localeCompare(b.task);
    }
    return 0;
  });

  const filteredTodos = sortedTodos.filter((todo) => {
    if (filterOption === "all") return true;
    if (filterOption === "completed") return todo.completed;
    if (filterOption === "incompleted") return !todo.completed;
    return true;
  });

  return (
    <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center bg-[#0C0C0C] py-3 px-5 md:px-0 gap-x-12">
      <div className="w-[20rem] md:w-[35rem] xl:w-[35rem] flex flex-col xl:flex-row items-center justify-center mt-10 xl:mt-20">
        <div className="flex flex-col items-center md:items-start justify-center gap-y-3">
          <h3 className="text-xl md:3xl xl:text-2xl uppercase font-medium  tracking-wide text-[#577B8D]">
            CSI Assignment 2
          </h3>
          <h4 className="text-[30px] md:text-[40px] lg:text-[60px] font-bold leading-none text-center md:text-left text-white">
            Create a dynamic
            <br /> To-do list app!
          </h4>
          <div className="text-white flex flex-col items-center md:items-start   ">
            <li>You can add tasks</li>
            <li>Completion marking button is available</li>
            <li>
              Task input is mandatory to add tasks, you can't add blank tasks
            </li>
            <li>Yours tasks will be saved in the local storage</li>
            <li>You can sort your tasks by date addition and alphabetically</li>
            <li>
              You can filter your tasks and see your all, completed, and
              incompleted tasks
            </li>
          </div>
        </div>
      </div>
      <div className=" bg-[#577B8D] mt-10 xl:mt-20 p-8 rounded-md ">
        <h1 className="text-white font-extrabold text-4xl">
          Complete Your Tasks!
        </h1>
        <TodoForm addTodo={addTodo} />
        <div className="flex justify-between mb-4 gap-x-3">
          <div>
            <label className="mr-2 text-white font-bold">Sort by:</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 bg-[#577B8D] border rounded border-[#344C64] text-white "
            >
              <option value="dateAdded">Date Added</option>
              <option value="alphabetically">Alphabetically</option>
            </select>
          </div>
          <div>
            <label className="mr-2 text-white font-bold">Filter:</label>
            <select
              value={filterOption}
              onChange={handleFilterChange}
              className="p-2 bg-[#577B8D] border rounded border-[#344C64] text-white"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incompleted">Incompleted</option>
            </select>
          </div>
        </div>
        <div>
          {filteredTodos.map((todo) =>
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
    </div>
  );
};

export default TodoWrapper;
