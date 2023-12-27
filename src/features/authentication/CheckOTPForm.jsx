import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authServices";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight, HiPencilAlt } from "react-icons/hi";

const RESEND_TIME = 5;

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        // ... (existing code)
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-full md:max-w-screen-md space-y-4">
        <form
          onSubmit={checkOtpHandler}
          className="w-full flex flex-col justify-center items-center space-y-3 ">
          <div className="w-full flex justify-between items-center pb-4">
            <button
              onClick={onBack}
              className="p-2 rounded-full bg-blue-500 text-white  hover:bg-blue-300 transition-all duration-300">
              <HiArrowRight />
            </button>
            <p className="font-bold text-lg md:text-xl lg:text-2xl mb-4 text-blue-700">
              کد تایید را وارد کنید:
            </p>
            <span></span>
          </div>
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
          <div className="mt-4 w-full text-xs px-1 text-slate-600">
            {time > 0 ? (
              <p>({time}) ثانیه تا ارسال مجدد کد</p>
            ) : (
              <button
                onClick={onReSendOtp}
                className="px-2 py-1 rounded-lg bg-green-500 text-white hover:bg-green-300 transition-all duration-300 my-2">
                ارسال مجدد کد تایید
              </button>
            )}
          </div>
          <button type="submit" className="btn w-full py-2">
            تایید
          </button>
        </form>
        {otpResponse && (
          <p className="text-xs text-gray-500 w-full flex justify-start items-center">
            {otpResponse?.message}
            <button className="text-green-600">
              <HiPencilAlt onClick={onBack} className="w-5 h-5" />
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default CheckOTPForm;
