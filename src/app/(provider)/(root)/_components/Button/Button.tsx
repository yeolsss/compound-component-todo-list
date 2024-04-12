import React, { ComponentProps, PropsWithChildren } from "react";

interface Props extends ComponentProps<"button"> {
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
