import React from "react";
import Form from "@/app/(provider)/(root)/_components/CreateTodo/Form";

interface Props {
  children: React.ReactNode;
}

function CreateTodo({ children }: Props) {
  return <>{children}</>;
}

CreateTodo.todoForm = Form;

export default CreateTodo;
