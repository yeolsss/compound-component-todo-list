import React from "react";

interface Props {
  children: React.ReactNode;
}

function TodoSection({ children }: Props) {
  return <section className="flex flex-col gap-10">{children}</section>;
}

export default TodoSection;
