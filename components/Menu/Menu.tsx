import Link from 'next/link';
import './menu.scss';
import { MdHome } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { LuPackageSearch } from "react-icons/lu";
import { ImProfile } from "react-icons/im";
import { FaUsersCog } from "react-icons/fa";
const Menu = () => {
    return(<div className="menu">
        <div className='item'>
            <span className='title'>Main</span>
            <Link href={'/Home'} className='listItem'>
            <MdHome />
            <span className='listItemTitle'>Dashboard</span>
            </Link>

            <Link href={'/Profile'} className='listItem'>
            <ImProfile />
            <span className='listItemTitle'>Profile</span>
            </Link>
        </div>

        <div className='item'>
            <span className='title'>Lists</span>
            <Link href={'/Packages'} className='listItem'>
            <LuPackageSearch />
            <span className='listItemTitle'>Packages</span>
            </Link>

            <Link href={'/Tasks'} className='listItem'>
            <FaTasks />
            <span className='listItemTitle'>Tasks</span>
            </Link>

            <Link href={'/Users'} className='listItem'>
            <FaUsersCog />
            <span className='listItemTitle'>Users</span>
            </Link>

            <Link href={'/Demos'} className='listItem'>
            <FaUsersCog />
            <span className='listItemTitle'>Forms Demo</span>
            </Link>
        </div>

    </div>)
}

export default Menu;