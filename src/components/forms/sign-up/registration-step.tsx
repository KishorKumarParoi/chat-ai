"use client";
import Spinner from "@/components/spinner";
import { useAuthContextHook } from "@/context/use-auth-context";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";

const DetailsForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: Spinner,
});

const RegistrationFormStep = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { currentStep } = useAuthContextHook();
  const [onOtp, setOnOtp] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");
  setValue("otp", onOtp);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );

    case 2:
      return <DetailsForm />;
    case 3:
  }

  return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
