import TodoCard from "@/app/(provider)/(root)/_components/TodoList/TodoCard";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function TodoWrapper({ children }: Props) {
  return <section className="grid grid-cols-4 gap-10">{children}</section>;
}

TodoWrapper.todoCard = TodoCard;

export default TodoWrapper;
