import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/app/style.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import '@/app/styles/globals.scss';



export default function BackEndLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main">
    <Navbar />
<div className="maincontainer">
    <div className="menuContainer">
        <Menu />
    </div>
    <div className="contentContainer">
        {children}
    </div>
    
</div>
<Footer/>
<ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
</div>
  );
}
