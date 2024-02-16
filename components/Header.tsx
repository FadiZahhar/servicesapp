"use client"
//import { db } from "../firebase";
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import imageSrc from "../assets/logo-blue.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();
  const [pageState, setPageState] = useState("Sign in");
  //const auth = getAuth();
  /*useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Signin");
      }
    });
  }, [auth]);
*/
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40 mt-4">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src={imageSrc.src}
            alt="logo"
            className="cursor-pointer"
            width={120}
            onClick={() => router.push('/')}
          />
        </div>
        <div>
        <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#hero')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#about')}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#how-we-work')}
            >
              How We Work
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#our-services')}
            >
              Our Services
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#our-packages')}
            >
              Our Packages
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#FAQ')}
            >
              FAQ
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push('/#contact-us')}
            >
              Contact Us
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent text-black border-b-red-500"
              }`}
              onClick={() => router.push(`/${pageState}`)}
            >
              {pageState}
            </li>
            </ul>
        </div>
      </header>
    </div>
  );
}