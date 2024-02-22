import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import "./searchbar.scss";
import { TbPointerPause } from "react-icons/tb";
const Searchbar = (props) => {
  return (
    <div className="search-box">
      <button className="btn-search">{props.icon}</button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
      />
    </div>
  );
};

export default Searchbar;
