import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "75", height = "40" }) {
  return (
    <div className="w-full flex justify-center">
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        color="blue"
        wrapperClass={{
          display: "flex",
          justifyContant: "center",
        }}
        visible={true}
      />
    </div>
  );
}

export default Loading;
