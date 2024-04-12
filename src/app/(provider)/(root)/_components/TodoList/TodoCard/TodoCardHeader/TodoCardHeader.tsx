import Title from "@/app/(provider)/(root)/_components/TodoList/TodoCard/Title";
import React, { PropsWithChildren } from "react";
import TodoCardButtonWrapper from "@/app/(provider)/(root)/_components/TodoList/TodoCard/TodoCardButtonWrapper";

interface TodoCardHeaderTypes extends React.FC<PropsWithChildren> {
  title: typeof Title;
  buttonWrapper: typeof TodoCardButtonWrapper;
}

const TodoCardHeader: TodoCardHeaderTypes = ({ children }) => {
  return <div className="flex justify-between">{children}</div>;
};

TodoCardHeader.title = Title;
TodoCardHeader.buttonWrapper = TodoCardButtonWrapper;

export default TodoCardHeader;
