import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";

function Auth() {
  return (
<div className="w-full flex justify-center items-center">
<div className="w-full sm:max-w-md">
      <SendOTPForm />
      <CheckOTPForm />
    </div>
</div>
  );
}

export default Auth;
