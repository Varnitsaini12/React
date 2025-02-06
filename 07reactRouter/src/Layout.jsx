import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Home from "./components/home/Home";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
