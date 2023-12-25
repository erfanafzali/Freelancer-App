import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";

import { getOtp } from "./../../services/authServices";
import { toast } from "react-hot-toast";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  // useQuery ==> get
  // useMutation ==> post put delete push

  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-full md:max-w-screen-md">
        <form
          className="w-full flex flex-col justify-center items-center space-y-3"
          onSubmit={sendOtpHandler}>
          <TextField
            name="phonenumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            label="شماره موبایل:"
          />
          <button type="submit" className="btn py-2">
            ارسال کد تایید
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
