import { useForm } from "@inertiajs/react";
import { FormEventHandler, useEffect } from "react";

export const useRegister = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);
  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('register'));
  };

  return {
    data, setData, post, processing, errors, reset, submit
  }
}