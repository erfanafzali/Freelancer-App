import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ isSendingOtp, phoneNumber, onChange, onSubmit }) {
  const handleInputChange = (e) => {
    // Allow only numeric values
    const numericValue = e.target.value.replace(/\D/g, "");
    onChange({
      target: {
        name,
        value: numericValue,
      },
    });
  };

  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="w-full md:max-w-screen-md">
        <form
          className="w-full flex flex-col justify-center items-center space-y-3"
          onSubmit={onSubmit}>
          <TextField
            name="phonenumber"
            value={phoneNumber}
            onChange={handleInputChange}
            label="شماره موبایل:"
            placeholder="شماره موبایل خودرا وارد کنید"
            maxLength={11}
            style={{ direction: "rtl" }}
            type="tel"
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
