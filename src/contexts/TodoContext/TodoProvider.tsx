"use client";

import { ITodo, TodoContext } from "@/contexts/TodoContext/index";
import React, { useCallback, useMemo, useState } from "react";
import { Todo } from "@/class/Todo.class";

interface Props {
  children: React.ReactNode;
}

export default function TodoProvider({ children }: Props) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmitAddTodo = useCallback(
    (
      e: React.FormEvent<HTMLFormElement>,
      todo: string,
      setTodo: React.Dispatch<React.SetStateAction<string>>,
      setTodoValueError: React.Dispatch<React.SetStateAction<boolean>>,
      ref: React.RefObject<HTMLInputElement>,
    ) => {
      e.preventDefault();

      if (todo.trim() === "") {
        alert("할 일을 입력해 주세요!");
        setTodoValueError(true);
        ref.current?.focus();
        return;
      }

      const newTodo = new Todo(Date.now(), todo, false);
      setTodos((prevState: ITodo[]) => [newTodo, ...prevState]);
      setTodo("");
    },
    [],
  );

  const handleOnClickDoneTodo = useCallback((todoId: number) => {
    setTodos((prevState) => {
      return prevState.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo,
      );
    });
  }, []);

  const handleOnClickDeleteTodo = useCallback((todoId: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
  }, []);

  const value = useMemo(
    () => ({
      todos,
      handleOnSubmitAddTodo,
      handleOnClickDoneTodo,
      handleOnClickDeleteTodo,
    }),
    [
      todos,
      handleOnSubmitAddTodo,
      handleOnClickDoneTodo,
      handleOnClickDeleteTodo,
    ],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
