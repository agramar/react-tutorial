import { useCallback, useState } from "react";

const useInputs = (initialForm: HTMLFormElement) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback((e: Event & { target: HTMLInputElement }) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;
