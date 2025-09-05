import OTPInput from "@/components/otp";

type Props = {
  setOTP: React.Dispatch<React.SetStateAction<string>>;
  onOTP: string;
};

const OTPForm = ({ onOTP, setOTP }) => {
  return (
    <>
      <h2 className="text-blue-400 md:text-4xl font-bold">Enter OTP</h2>
      <p className="text-blue-500 md:text-sm">
        Enter the one time password that was sent to your email
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput otp={onOTP} setOtp={setOTP} />
      </div>
    </>
  );
};

export default OTPForm;
