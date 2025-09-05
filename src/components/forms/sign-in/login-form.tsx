"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { USER_LOGIN_FORM } from "@/constants/forms";
import { useFormContext } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <h2 className="text-blue-500 md:text-4xl font-bold">Login</h2>
      <p className="text-purple-600 md:text-sm">
        You will receive a one time password
      </p>
      {USER_LOGIN_FORM.map((field) => (
        <FormGenerator
          key={field.id}
          {...field}
          errors={errors}
          register={register}
          name={field.name}
        />
      ))}
    </>
  );
};

export default LoginForm;
