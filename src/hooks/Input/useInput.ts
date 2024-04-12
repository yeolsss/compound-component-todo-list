import React, { useCallback, useRef, useState } from "react";

type ReturnTypes<T> = [
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
];

const useInput = <T>(initialState: T): ReturnTypes<T> => {
  const [state, setState] = useState<T>(initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as T;
      setState(value);
    },
    [],
  );

  return [state, setState, handleOnChange, inputRef];
};

export default useInput;
