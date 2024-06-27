"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
