"use client";

import useInput from "@/hooks/Input";
import Form from "@/app/(provider)/(root)/_components/CreateTodo/Form";
import React from "react";
import { useTodo } from "@/contexts/TodoContext/TodoProvider";

function CreateTodoWrapper() {
  const [
    todo,
    setTodo,
    handleOnChangeTodo,
    todoRef,
    todoValueError,
    setTodoValueError,
  ] = useInput<string>("");

  const { handleOnSubmitAddTodo } = useTodo();

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
        handleOnSubmitAddTodo(e, todo, setTodo, setTodoValueError, todoRef)
      }
    >
      <Form.input
        type="text"
        placeholder="할 일을 입력하세요."
        value={todo}
        onChange={handleOnChangeTodo}
        className={`border-2 focus:border-green-400 text-black p-2 rounded ${todoValueError && "!border-red-500"}`}
        ref={todoRef}
      />

      <Form.button
        type="submit"
        className="bg-white text-black px-5 rounded hover:bg-gray-800 hover:text-white transition-colors duration-100 ease-in"
      >
        등록
      </Form.button>
    </Form>
  );
}

export default CreateTodoWrapper;
