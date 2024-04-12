"use client";

import { ITodo, useTodo } from "@/contexts/TodoContext";
import TodoWrapper from "@/app/(provider)/(root)/_components/TodoWrapper";
import TodoSection from "@/components/TodoSection";
import { useEffect } from "react";

function TodoList() {
  const { todos } = useTodo();

  const { todoList, doneList } = todos.reduce(
    (acc, todo) => {
      if (todo.done) {
        acc.doneList.push(todo);
      } else {
        acc.todoList.push(todo);
      }

      return acc;
    },
    {
      todoList: [] as ITodo[],
      doneList: [] as ITodo[],
    },
  );

  useEffect(() => {
    console.log("rerender");
  }, []);
  return (
    <section className="flex flex-col gap-20">
      <TodoSection>
        <h1 className="text-4xl">TODO</h1>
        <TodoWrapper>
          {todoList.map((todo) => (
            <TodoWrapper.todoCard key={todo.id} todo={todo} />
          ))}
        </TodoWrapper>
      </TodoSection>

      <TodoSection>
        <h1 className="text-4xl">Done</h1>
        <TodoWrapper>
          {doneList.map((todo) => (
            <TodoWrapper.todoCard key={todo.id} todo={todo} />
          ))}
        </TodoWrapper>
      </TodoSection>
    </section>
  );
}

export default TodoList;
