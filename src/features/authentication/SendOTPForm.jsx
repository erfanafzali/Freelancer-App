import { useState } from "react";
import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, phoneNumber, onChange, onSubmit }) {
  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-full md:max-w-screen-md">
        <form
          className="w-full flex flex-col justify-center items-center space-y-3"
          onSubmit={onSubmit}>
          <TextField
            name="phonenumber"
            value={phoneNumber}
            onChange={onChange}
            label="شماره موبایل:"
          />
          <div className="w-full ">
            {isSendingOtp ? (
              <Loading />
            ) : (
              <button type="submit" className="btn py-2">
                ارسال کد تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;
