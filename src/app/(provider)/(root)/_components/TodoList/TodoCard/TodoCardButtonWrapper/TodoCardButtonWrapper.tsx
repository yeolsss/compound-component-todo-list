import React, { PropsWithChildren } from "react";
import Button from "@/app/(provider)/(root)/_components/Button";

interface TodoCardButtonWrapperTypes extends React.FC<PropsWithChildren> {
  doneButton: typeof Button;
  deleteButton: typeof Button;
}
const TodoCardButtonWrapper: TodoCardButtonWrapperTypes = ({ children }) => {
  return <div className="flex gap-5">{children}</div>;
};

TodoCardButtonWrapper.doneButton = Button;
TodoCardButtonWrapper.deleteButton = Button;

export default TodoCardButtonWrapper;
