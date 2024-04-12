import React from "react";
import Button from "@/app/(provider)/(root)/_components/Button";

interface Props {
  children: React.ReactNode;
}

function TodoCardButtonWrapper({ children }: Props) {
  return <div className="flex gap-5">{children}</div>;
}

TodoCardButtonWrapper.doneButton = Button;
TodoCardButtonWrapper.deleteButton = Button;

export default TodoCardButtonWrapper;
