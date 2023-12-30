import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="w-full flex justify-center items-center">
        <AuthContainer />
      </div>
    </div>
  );
}

export default Auth;
