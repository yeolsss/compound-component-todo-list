import React, { useCallback, useRef, useState } from "react";

type ReturnTypes<T> = [
  state: T,
  setState: React.Dispatch<React.SetStateAction<T>>,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  stateValueError: boolean,
  setStateValueError: React.Dispatch<React.SetStateAction<boolean>>,
];

const useInput = <T>(initialState: T): ReturnTypes<T> => {
  const [state, setState] = useState<T>(initialState);
  const [stateValueError, setStateValueError] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value as T;
      setState(value);
      setStateValueError(false);
    },
    [],
  );

  return [
    state,
    setState,
    handleOnChange,
    inputRef,
    stateValueError,
    setStateValueError,
  ];
};

export default useInput;
