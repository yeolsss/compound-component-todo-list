import React, { ComponentProps, forwardRef } from "react";

interface Props extends ComponentProps<"input"> {}

const Input = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

Input.displayName = "Input";
export default Input;
