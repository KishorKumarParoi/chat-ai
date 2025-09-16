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
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-600 md:text-5xl text-3xl font-extrabold mb-2 drop-shadow-lg text-center">
        Create an account
      </h2>

      <p className="text-blue-700 md:text-lg text-base font-medium mb-8 text-center bg-blue-50/60 rounded-xl px-4 py-3 shadow-sm">
        Tell us about yourself!{" "}
        <span className="font-semibold text-cyan-600">What do you do?</span>{" "}
        <br />
        <span className="text-purple-600">
          Let&apos;s tailor your experience so it best suits you.
        </span>
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
