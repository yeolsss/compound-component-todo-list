import React from "react";
import TodoProvider from "@/contexts/TodoContext";

interface Props {
  children: React.ReactNode;
}

export default function ProviderLayout({ children }: Props) {
  return <TodoProvider>{children}</TodoProvider>;
}
