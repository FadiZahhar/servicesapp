
"use client"
import imageSrc from "@/assets/logo-blue.png";
import Image from "next/image";

import "./header.scss";
import Link from "next/link";

import { useState, useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (!event.target.closest('.headerHome') && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <>
      <header className="container">
        <div className="logo">
          <Link href="/">
              <Image
                src={imageSrc}
                alt="logo"
                className="cursor-pointer"
                width={120}
                height={120}
              />
          </Link>
        </div>
        <button onClick={toggleMenu} className="burger-menu">
          {/* Replace span with your icon */}
          <span>&#9776;</span> {/* This is a simple representation of a burger icon */}
        </button>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#howwework">How We Work</Link></li>
            <li><Link href="/#ourservices">Our Services</Link></li>
            <li><Link href="/#ourpackages">Our Packages</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contactus">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
     
    </>
  );
};

export default Header;

