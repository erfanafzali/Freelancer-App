import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Owner from "./pages/Owner";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />

      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route element={<AppLayout />}>
          <Route path="/owner" element={<Owner />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

// Auth
// Task #1 : auth user via OTP : one-time-password
// 1.form -> getOTP -> input + button => phoneNumber => send OTP
// 2.form -> checkOTP -> request -> (otp , phoneNUmber)

// request =>
// 1. axios (useState , useEffect)
// 2. useFetch (data , loading , error)
// 3. react-query => redux alternative (remote states), fetch (get) , mutate (post) 99% use in real project

// features-based driven folder structure :
// project -> (components, hooks, context , ...)
// proposal
// authentication
// category
// users
