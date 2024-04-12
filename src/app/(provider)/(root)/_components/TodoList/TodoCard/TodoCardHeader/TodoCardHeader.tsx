import Title from "@/app/(provider)/(root)/_components/TodoList/TodoCard/Title";
import React from "react";
import TodoCardButtonWrapper from "@/app/(provider)/(root)/_components/TodoList/TodoCard/TodoCardButtonWrapper";

interface Props {
  children?: React.ReactNode;
}

function TodoCardHeader({ children }: Props) {
  return <div className="flex justify-between">{children}</div>;
}

TodoCardHeader.title = Title;
TodoCardHeader.buttonWrapper = TodoCardButtonWrapper;

export default TodoCardHeader;
