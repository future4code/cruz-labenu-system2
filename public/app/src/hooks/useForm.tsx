import { ChangeEvent, useState } from "react";

export const useForm = (initialForm: [] | {}) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm];
};