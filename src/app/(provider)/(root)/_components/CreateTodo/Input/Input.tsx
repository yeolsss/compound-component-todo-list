import React, { forwardRef } from "react";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <input ref={ref} {...props} className="text-black p-2 rounded" />;
});

Input.displayName = "Input";
export default Input;
