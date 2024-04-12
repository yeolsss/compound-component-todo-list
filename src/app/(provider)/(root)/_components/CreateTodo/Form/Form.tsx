import React, { PropsWithChildren } from "react";
import Input from "@/app/(provider)/(root)/_components/CreateTodo/Input/Input";
import Button from "@/app/(provider)/(root)/_components/Button/Button";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface FormChild extends React.FC<PropsWithChildren<Props>> {
  input: typeof Input;
  button: typeof Button;
}

const Form: FormChild = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-10">
      {children}
    </form>
  );
};

Form.input = Input;
Form.button = Button;

export default Form;
