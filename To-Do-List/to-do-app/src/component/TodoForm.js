import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" w-full ">
      <input
        type="text"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none bg-transparent border border-[#8758ff] py-2 px-4 my-4 w-[200px] md:w-[550px] text-white placeholder:text-[#ffffff4d] "
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className=" bg-[#8758ff] text-white border-none py-2 md:p-2 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
};
