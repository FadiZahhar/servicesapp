import "./navbar.scss";
import { IoSearchSharp } from "react-icons/io5";
import { FaExpand } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import logo from "@/assets/logo-blue.png";
import Dropdownicon from "@/components/dropdownicon/dropdownIcon";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">&nbsp;</div>
      <div className="icons">
        <IoSearchSharp className="icons" />
        
        <IoMdApps className="icons" />
        <FaExpand className="icons" />
        <div className="notification">
          <Dropdownicon
            icon={<IoMdNotifications className="icons" />}
            list={["omar", "test"]}
            notification={3}
          />
        </div>

        <div className="user">
          <img src={logo.src} alt="" />
          <span>Fadi</span>
        </div>

        <div className="notification">
          <Dropdownicon
            icon={<IoMdSettings className="icons" />}
            list={[]}
            notification={false}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
