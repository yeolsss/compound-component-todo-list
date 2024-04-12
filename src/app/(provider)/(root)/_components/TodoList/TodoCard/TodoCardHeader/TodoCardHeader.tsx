import Title from "@/app/(provider)/(root)/_components/TodoList/TodoCard/Title";
import React, { PropsWithChildren } from "react";
import Button from "@/app/(provider)/(root)/_components/Button";

interface TodoCardHeaderTypes extends React.FC<PropsWithChildren> {
  title: typeof Title;
  doneButton: typeof Button;
  deleteButton: typeof Button;
}

const TodoCardHeader: TodoCardHeaderTypes = ({ children }) => {
  return <div className="flex justify-between">{children}</div>;
};

TodoCardHeader.title = Title;
TodoCardHeader.doneButton = Button;
TodoCardHeader.deleteButton = Button;

export default TodoCardHeader;
