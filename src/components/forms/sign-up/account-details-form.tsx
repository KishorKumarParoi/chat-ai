import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const AccountDetailsForm = () => {
  return (
    <>
      <h2 className="text-neutral-700 md:text-4xl font-bold">
        Account Details
      </h2>

      <p className="text-black md:text-sm">Enter your email and password</p>
      {
        USER_REGISTRATION_FORM.map((field)=> (
            <FormGenerator 
        ))
      }
    </>
  );
};

export default AccountDetailsForm;
