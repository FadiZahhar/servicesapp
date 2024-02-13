
import Navbar from "../Navbar/Navbar";
import Menu from '@/components/Menu/Menu';
import Footer from '@/components/Footer/Footer';
import "@/app/globals.scss";



export default function BackEndLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="main">
    <Navbar />
<div className="container">
    <div className="menuContainer">
        <Menu />
    </div>
    <div className="contentContainer">
        {children}
    </div>
    
</div>
<Footer/>
</div>
  );
}
