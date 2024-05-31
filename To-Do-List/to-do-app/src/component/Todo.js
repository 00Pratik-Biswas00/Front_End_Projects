import React from "react";
import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="max-w-[500px] md:max-w-[1000px] flex justify-between items-center bg-[#8758ff] text-white py-3 px-4 mb-4 rounded-md p-2 border-b border-gray-600">
      <div className="flex-grow break-words" style={{ maxWidth: "500px" }}>
        <p
          className={task.completed ? "line-through" : ""}
          // onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
      </div>
      <div className="flex gap-x-2 text-xl">
        <FaCheckSquare
          className={`cursor-pointer ${
            task.completed ? "text-green-500" : "text-white"
          }`}
          onClick={() => toggleComplete(task.id)}
        />
        <MdDelete
          className="text-white cursor-pointer "
          onClick={() => deleteTodo(task.id)}
        />
        <FaEdit
          className="text-white cursor-pointer "
          onClick={() => editTodo(task.id)}
        />
      </div>
    </div>
  );
};
