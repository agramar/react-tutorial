import { useCallback, useState } from "react";

const useChecked = (initialData: any) => {
  const [value, setValue] = useState(initialData);
  const onChange = useCallback((e: Event & { target: HTMLInputElement}) => {
    setValue(e.target.checked);
  }, []);
  return [value, onChange, setValue];
};

export default useChecked;
