import React from "react";
import Header from "@/app/(provider)/(root)/_components/Header";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
