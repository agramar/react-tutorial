import { useCallback, useState } from "react";

const useInput = (initialState: any) => {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((e: Event & { target: HTMLInputElement }) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange, setValue];
};

export default useInput;
