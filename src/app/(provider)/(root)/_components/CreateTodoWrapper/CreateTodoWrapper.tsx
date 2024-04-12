"use client";

import React from "react";
import CreateTodo from "@/app/(provider)/(root)/_components/CreateTodo";
import { useTodo } from "@/contexts/TodoContext";
import useInput from "@/hooks/Input";

function CreateTodoWrapper() {
  const [todo, setTodo, handleOnChangeTodo, todoRef] = useInput<string>("");
  const { handleOnSubmitAddTodo } = useTodo();

  return (
    <CreateTodo>
      <CreateTodo.todoForm
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          handleOnSubmitAddTodo(e, todo, setTodo)
        }
      >
        <CreateTodo.todoForm.input
          type={"text"}
          placeholder={"할 일을 입력하세요."}
          value={todo}
          onChange={handleOnChangeTodo}
          ref={todoRef}
        />

        <CreateTodo.todoForm.button
          type={"submit"}
          className="bg-white text-black px-5 rounded hover:bg-gray-800 hover:text-white transition-colors duration-100 ease-in"
        >
          등록
        </CreateTodo.todoForm.button>
      </CreateTodo.todoForm>
    </CreateTodo>
  );
}

export default CreateTodoWrapper;
