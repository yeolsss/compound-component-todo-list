"use client";

import { ITodo, useTodo } from "@/contexts/TodoContext/TodoProvider";
import TodoCardHeader from "@/app/(provider)/(root)/_components/TodoList/TodoCard/TodoCardHeader";

interface Props {
  todo: ITodo;
}

function TodoCard({ todo }: Props) {
  const { handleOnClickDoneTodo, handleOnClickDeleteTodo } = useTodo();
  return (
    <article className="flex flex-col gap-5">
      <TodoCardHeader>
        <TodoCardHeader.title>
          {!todo.done ? "TODO" : "DONE"}
        </TodoCardHeader.title>

        <TodoCardHeader.buttonWrapper>
          <TodoCardHeader.buttonWrapper.doneButton
            className="bg-green-700 px-2 rounded hover:bg-green-500 transition-colors duration-100 ease-in"
            onClick={() => handleOnClickDoneTodo(todo.id)}
          >
            {!todo.done ? "DONE" : "TODO"}
          </TodoCardHeader.buttonWrapper.doneButton>

          <TodoCardHeader.buttonWrapper.deleteButton
            className="bg-red-700 px-2 rounded hover:bg-red-500 transition-colors duration-100 ease-in"
            onClick={() => handleOnClickDeleteTodo(todo.id)}
          >
            DEL
          </TodoCardHeader.buttonWrapper.deleteButton>
        </TodoCardHeader.buttonWrapper>
      </TodoCardHeader>

      <p className="break-words tracking-wide">{todo.todo}</p>
    </article>
  );
}

export default TodoCard;
