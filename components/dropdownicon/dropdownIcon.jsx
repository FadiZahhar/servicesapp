"use client";

import "./dropdownicon.scss";
import React, { useRef, useState } from "react";
import {
  IoMdSettings,
  IoSearchSharp,
  IoMdNotifications,
  IoMdApps,
  FaRegUser,
} from "react-icons/io";

const Dropdownicon = (props) => {
  const [open, setOpen] = useState(false);
  const menus = props.list;

  return (
    <div
      className="subnav"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div>
        {props.icon}
        {/* <IoMdSettings className="icons" /> */}
        {props.notification && <span>{props.notification}</span>}
      </div>
      {open && (
        <div className="bg-drop">
          <ul>
            {menus.map((menu) => (
              <li
                className=""
                key={menu}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <a href="">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdownicon;
