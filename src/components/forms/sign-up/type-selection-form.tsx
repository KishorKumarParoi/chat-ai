import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const TypeSelectionForm = ({ register, userType, setUserType }: Props) => {
  return (
    <>
      <h2 className="text-slate-800 md:text-4xl font-bold">
        Create an account
      </h2>

      <p className="text-blue-500 md:text-sm">
        Tell us about yourself! What do you do? Let&apos;s tailor your <br />
        experience so it best suits you.
      </p>

      <UserTypeCard
        register={register}
        userType={userType}
        setUserType={setUserType}
        value="owner"
        title="I own a business"
        text="Setting up my account for my company"
      />

      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="I am a student"
        text="Learning to learn about the tool"
      />
    </>
  );
};

export default TypeSelectionForm;
