import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full ">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-transparent border border-[#8758ff] py-2 px-4 my-4 w-[200px] md:w-[550px] text-white placeholder:text-[#ffffff4d] "
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-[#8758ff] text-white border-none py-2 md:p-2 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
