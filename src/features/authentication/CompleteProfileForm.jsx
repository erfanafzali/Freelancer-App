import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";

function CompleteProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ name, email, role });
      toast.success(message);
      if (!user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "🙂" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full space-y-6">
            <TextField
              label="نام و نام خانوادگی:"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="نام و نام خانوادگی خود را وارد کنید"
              type="text"
            />
            <TextField
              label="ایمیل:"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="ایمل خود را وارد کنید"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center gap-x-8 mt-8">
            <RadioInput
              label="کارفرما"
              value="OWNER"
              onChange={(e) => setRole(e.target.value)}
              id="OWNER"
              name="role"
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              value="FREELANCER"
              onChange={(e) => setRole(e.target.value)}
              id="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
            />
          </div>
          <div className="w-full mt-10">
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn py-2">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
