import Navbar from '@/components/Navbar/Navbar';
import './home.scss';
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
const Home = () => {
    return(<div className="main">
    <Navbar />
<div className="container">
    <div className="menuContainer">
        <Menu />
    </div>
    <div className="contentContainer">
    </div>
    
</div>
<Footer/>
</div>)
}

export default Home;