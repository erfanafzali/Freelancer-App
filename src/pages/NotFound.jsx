import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="w-full mt-10 flex justify-center items-center">
      <div className="w-full flex justify-center items-center sm:max-w-sm">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-base md:text-lg font-bold mb-6">
            صفحه ای که دنبالش بودید پیدا نشد🙄
          </h1>
          <button
            className="w-full flex justify-center items-center gap-x-2"
            onClick={moveBack}>
            <HiArrowRight className="text-blue-600 w-6 h-7" />
            <span className=" text-lg  md:text-xl font-bold">برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
