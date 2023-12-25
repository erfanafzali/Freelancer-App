import { useState } from "react";
import OtpInput from "react-otp-input";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-full md:max-w-screen-md space-y-4">
        <form className="w-full flex flex-col justify-center items-center space-y-3 ">
          <p className="font-bold text-sm sm:text-base md:text-lg mb-4">
            کد تایید را وارد کنید
          </p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType="number"
            renderSeparator={
              <span className="flex justify-center items-center w-full">
                &nbsp; &nbsp;
              </span>
            }
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle={{
              width: "2.3rem",
              padding: "0.5rem 0.2rem",
              border: "1px solid gray",
              borderRadius: "0.5rem",
            }}
          />
        </form>
        <button className="btn w-full py-2">تایید</button>
      </div>
    </div>
  );
}

export default CheckOTPForm;
