import { FormGenerator } from "@/components/global/form-generator";
import { USER_REGISTRATION_FORM } from "@/constants/forms";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = ({ errors, register }: Props) => {
  return (
    <>
      <h2 className="text-neutral-700 md:text-4xl font-bold">
        Account Details
      </h2>

      <p className="text-black md:text-sm">
        Enter your fullname, email and password
      </p>
      {USER_REGISTRATION_FORM.map((field) => (
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

export default AccountDetailsForm;
