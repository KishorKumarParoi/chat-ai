import { onCompleteUserRegistration } from "@/actions/auth";
import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useSignUpForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { signUp, isLoaded, setActive } = useSignUp();

  const router = useRouter();

  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema as any),
    defaultValues: {
      type: "owner",
    },
    mode: "onChange",
  });

  const onGenerateOTP = async (
    email: string,
    password: string,
    onNext: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      toast.success("Verification code sent to your email!");
      onNext((prev) => prev + 1);
    } catch (error: any) {
      console.error("SignUp Error:", error);

      const errorCode = error?.errors?.[0]?.code;
      const errorMessage = error?.errors?.[0]?.longMessage || error?.message;

      switch (errorCode) {
        case "form_identifier_exists":
          // In development, suggest using a different email
          if (process.env.NODE_ENV === "development") {
            toast.error(
              "This email exists in Clerk. Try: test" +
                Date.now() +
                "@example.com"
            );
          } else {
            toast.error(
              "This email is already registered. Please sign in instead.",
              {
                action: {
                  label: "Sign In",
                  onClick: () => router.push("/auth/sign-in"),
                },
              }
            );
          }
          break;
        case "captcha_invalid":
          toast.error("CAPTCHA verification failed. Please try again.");
          break;
        default:
          toast.error(errorMessage || "Registration failed. Please try again.");
      }
    }
  };

  const onHandleSubmit = methods.handleSubmit(
    async (values: UserRegistrationProps) => {
      if (!isLoaded) return;

      try {
        setLoading(true);

        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code: values.otp,
        });

        if (completeSignUp.status !== "complete") {
          return {
            message: "Something went wrong!",
          };
        }

        if (completeSignUp.status === "complete") {
          if (!signUp.createdUserId) return;

          const registered = await onCompleteUserRegistration(
            values.fullname,
            signUp.createdUserId,
            values.type
          );

          if (registered?.status === 200 && registered.user) {
            await setActive({
              session: completeSignUp.createdSessionId,
            });
          }

          setLoading(false);
          router.push("/dashboard");

          if (registered?.status === 400) {
            toast("Something went wrong on completing user registration!");
          }
        }
      } catch (error: any) {
        toast(
          error?.errors?.[0]?.longMessage ||
            error?.message ||
            "Error in form submit"
        );
      }
    }
  );

  return {
    methods,
    onHandleSubmit,
    onGenerateOTP,
    loading,
  };
};
