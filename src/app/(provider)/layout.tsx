import React from "react";
import TodoProvider from "@/contexts/TodoContext/TodoProvider";

interface Props {
  children: React.ReactNode;
}

export default function ProviderLayout({ children }: Props) {
  return <TodoProvider>{children}</TodoProvider>;
}
