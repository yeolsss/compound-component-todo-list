import React, { PropsWithChildren } from "react";
import Form from "@/app/(provider)/(root)/_components/CreateTodo/Form";

interface TodoWrapperTypes extends React.FC<PropsWithChildren> {
  todoForm: typeof Form;
}

const CreateTodo: TodoWrapperTypes = ({ children }) => {
  return <>{children}</>;
};

CreateTodo.todoForm = Form;

export default CreateTodo;
