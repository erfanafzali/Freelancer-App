import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return <div className="bg-red-100 col-span-2 py-4 px-8">App header</div>;
}

export default Header;
