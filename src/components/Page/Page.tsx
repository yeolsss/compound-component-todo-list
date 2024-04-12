import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Page({ children }: Props) {
  return (
    <main className="container py-20 px-5 mx-auto flex flex-col gap-10">
      {children}
    </main>
  );
}
