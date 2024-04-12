"use client";

import { Todo } from "@/contexts/TodoContext/Todo.class";
import TodoCardHeader from "@/app/(provider)/(root)/_components/TodoList/TodoCard/TodoCardHeader";
import { useTodo } from "@/contexts/TodoContext";

interface Props {
  todo: Todo;
}

function TodoCard({ todo }: Props) {
  const { handleOnClickDoneTodo, handleOnClickDeleteTodo } = useTodo();
  return (
    <article>
      <TodoCardHeader>
        <TodoCardHeader.title>
          {!todo.done ? "TODO" : "DONE"}
        </TodoCardHeader.title>

        <TodoCardHeader.doneButton
          onClick={() => handleOnClickDoneTodo(todo.id)}
        >
          {!todo.done ? "DONE" : "TODO"}
        </TodoCardHeader.doneButton>

        <TodoCardHeader.deleteButton
          onClick={() => handleOnClickDeleteTodo(todo.id)}
        >
          DEL
        </TodoCardHeader.deleteButton>
      </TodoCardHeader>

      <p>{todo.todo}</p>
    </article>
  );
}

export default TodoCard;
