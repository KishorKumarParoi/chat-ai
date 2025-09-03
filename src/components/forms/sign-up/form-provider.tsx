import { AuthContextProvider } from "@/context/use-auth-context";

const SignUpFOrmProvider = ({ children }: React.ReactNode) => {
  return <AuthContextProvider>SignUpFOrmProvider</AuthContextProvider>;
};

export default SignUpFOrmProvider;
