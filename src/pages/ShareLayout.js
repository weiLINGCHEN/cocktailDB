import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ShareLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default ShareLayout;
