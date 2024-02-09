"use client"
import app,{ db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import imageSrc from "../assets/logo-blue.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  function pathMatchRoute(route:any) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40 mt-4">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={imageSrc.src}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
        <div>
        <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => router.push('/Signin')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => router.push('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/Signin") || pathMatchRoute("/Profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => router.push('/Profile')}
            >
              {pageState}
            </li>
            </ul>
        </div>
      </header>
    </div>
  );
}