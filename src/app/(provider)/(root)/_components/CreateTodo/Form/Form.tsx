import React from "react";
import Input from "@/app/(provider)/(root)/_components/CreateTodo/Input/Input";
import Button from "@/app/(provider)/(root)/_components/Button/Button";

interface Props {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function Form({ onSubmit, children }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex gap-10">
      {children}
    </form>
  );
}

Form.input = Input;
Form.button = Button;

export default Form;
