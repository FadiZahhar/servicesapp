"use client"
import app,{ db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import imageSrc from "../assets/logo-blue.png";
import { useEffect, useState } from "react";
export default function Header() {
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

        </div>
      </header>
    </div>
  );
}