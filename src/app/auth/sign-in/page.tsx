import SignInFormProvider from "@/components/forms/sign-in/form-provider";
import LoginForm from "@/components/forms/sign-in/login-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignInFormProvider>
          <div className="flex flex-col gap-6">
            <LoginForm />
            <div className="w-full flex flex-col gap-4 items-center mt-2">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 hover:from-blue-700 hover:via-purple-700 hover:to-fuchsia-600 text-white font-bold text-lg shadow-lg transition-all duration-300 rounded-xl py-3 cursor-pointer"
              >
                <span className="tracking-wide">Sign In</span>
              </Button>
              <p className="text-gray-600 text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href={"/auth/sign-up"}
                  className="font-bold text-fuchsia-600 hover:underline transition-colors duration-200"
                >
                  Create One
                </Link>
              </p>
            </div>
          </div>
        </SignInFormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
