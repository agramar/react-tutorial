import { useCallback, useState } from "react";

const useInput = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const onChange = useCallback((e: Event & { target: HTMLInputElement }) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange, setValue];
};

export default useInput;
