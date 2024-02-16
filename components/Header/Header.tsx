"use client";
import app, { db } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import imageSrc from "../../assets/logo-blue.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import "./header.scss";

export default function Header() {
  const router = useRouter();
  const [pageState, setPageState] = useState("Sign in");
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Signin");
      }
    });
  }, [auth]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="headerHome">
        {/* logo */}
        <div>
          <img
            src={imageSrc.src}
            alt="logo"
            className="cursor-pointer"
            width={120}
            height={120}
            onClick={() => router.push("/")}
          />
        </div>
        <nav>
          <ul className="">
            <li onClick={() => router.push("/#hero")}>Home</li>
            <li onClick={() => router.push("/#about")}>About</li>
            <li onClick={() => router.push("/#how-we-work")}>How We Work</li>
            <li onClick={() => router.push("/#our-services")}>Our Services</li>
            <li onClick={() => router.push("/#our-packages")}>Our Packages</li>
            <li onClick={() => router.push("/#FAQ")}>FAQ</li>
            <li onClick={() => router.push("/#contact-us")}>Contact Us</li>
          </ul>
        </nav>

        <div>
          <button className="btn-login" onClick={() => router.push(`/${pageState}`)}>{pageState}</button>

          {!showModal && (
            <button
              className="show-modal"
              onClick={() => {
                setShowModal(true);
              }}
            >
              {" "}
              <TfiAlignJustify />{" "}
            </button>
          )}
          {showModal && (
            <button
              className="show-modal"
              onClick={() => {
                setShowModal(false);
              }}
            >
              {" "}
              <TfiClose />{" "}
            </button>
          )}
        </div>
      </header>

      {showModal && (
        <ul className="mobil-nav">
          <li onClick={() => router.push("/#hero")}>Home</li>
          <li onClick={() => router.push("/#about")}>About</li>
          <li onClick={() => router.push("/#how-we-work")}>How We Work</li>
          <li onClick={() => router.push("/#our-services")}>Our Services</li>
          <li onClick={() => router.push("/#our-packages")}>Our Packages</li>
          <li onClick={() => router.push("/#FAQ")}>FAQ</li>
          <li onClick={() => router.push("/#contact-us")}>Contact Us</li>
          <li onClick={() => router.push(`/${pageState}`)}>{pageState}</li>
        </ul>
      )}
    </div>
  );
}
