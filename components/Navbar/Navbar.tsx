import './navbar.scss';
import { IoSearchSharp } from "react-icons/io5";
import { FaExpand } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdApps } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import logo from "@/assets/logo-blue.png";
const Navbar = () => {
    return(<div className='navbar'>
        <div className='logo'>
            <img src="logo.svg" alt="" />
            <span>Pro-Solutions.net</span>
        </div>
        <div className='icons'>
        <IoSearchSharp className='icons' />
        <IoMdApps className='icons'/>
            <FaExpand className='icons'/>
            <div className='notification'>
                <IoMdNotifications className='icons'/>
                <span>1</span>
            </div>
            <div className='user'>
                <img
                src={logo.src}
                alt=""
                />
                <span>Fadi</span>
            </div>
            <IoMdSettings className='icons' />
        </div>
    </div>);
}
export default Navbar;