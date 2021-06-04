import { ChangeEvent, useState } from "react";

type Objeto = Record<string, number | string>


export const useForm = (initialForm: Record<string, number | string>) => {
  const [form, setForm] = useState(initialForm);

  const onChange = ( e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return [form, onChange, resetForm];
};