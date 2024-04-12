import TodoCard from "@/app/(provider)/(root)/_components/TodoList/TodoCard";
import React from "react";

interface TodoWrapperTypes extends React.FC<React.PropsWithChildren> {
  todoCard: typeof TodoCard;
}

const TodoWrapper: TodoWrapperTypes = ({ children }) => {
  return <section className="grid grid-cols-4 gap-10">{children}</section>;
};

TodoWrapper.todoCard = TodoCard;

export default TodoWrapper;
