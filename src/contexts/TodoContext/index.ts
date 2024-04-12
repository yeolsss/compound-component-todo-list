"use client";
// 1. 만든다
import React, { createContext, useContext } from "react";

export interface ITodo {
  id: number;
  todo: string;
  done: boolean;
}

type TodoContext = {
  todos: ITodo[];
  handleOnSubmitAddTodo: (
    e: React.FormEvent<HTMLFormElement>,
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  handleOnClickDoneTodo: (todoId: number) => void;
  handleOnClickDeleteTodo: (todoId: number) => void;
};

const initialTodo: TodoContext = {
  todos: [],
  handleOnSubmitAddTodo: () => {},
  handleOnClickDoneTodo: () => {},
  handleOnClickDeleteTodo: () => {},
};

export const TodoContext = createContext(initialTodo);

export const useTodo = () => useContext(TodoContext);
