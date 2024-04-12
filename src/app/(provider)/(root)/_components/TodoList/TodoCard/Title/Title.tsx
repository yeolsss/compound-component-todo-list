import React from "react";

interface Props {
  children: React.ReactNode;
}
function Title({ children }: Props) {
  return <h1 className="text-2xl">{children}</h1>;
}

export default Title;
