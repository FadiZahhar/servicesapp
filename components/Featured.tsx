import { LiaTachometerAltSolid } from "react-icons/lia";
import { FaAmazonPay } from "react-icons/fa";
import { LuPackagePlus } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
export default function Featured() {
    return(    <section id="featured-services" className="featured-services">

<div className="section-title">
        <h2>Our Platform</h2>
        <h3>Find Out More <span>how you can start</span></h3>
        <p>We have our own platform that is effecient and flexible for your MVP budget</p>
      </div>

    <div className="container centered" data-aos="fade-up">

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="bx bxl-dribbble"><MdOutlineManageAccounts/></i></div>
            <h4 className="title"><a href="">Create an account</a></h4>
            <p className="description">Click on the &quot;Sign Up&quot; button located at the top right corner of our homepage.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="bx bx-file"><LuPackagePlus /></i></div>
            <h4 className="title"><a href="">Select a Package</a></h4>
            <p className="description">Take a look at the various packages we offer to find the one that best suits your needs.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="bx bx-tachometer"><FaAmazonPay /></i></div>
            <h4 className="title"><a href="">Pay for a package</a></h4>
            <p className="description">Once the payment is made you will need to provide proof of payment to ensure your order is processed without any delays.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="bx bx-world"><LiaTachometerAltSolid /></i></div>
            <h4 className="title"><a href="">Track progress</a></h4>
            <p className="description">Our platform is designed to keep you closely connected with the progress of your tasks and subtasks.</p>
          </div>
        </div>

      </div>

    </div>
  </section>)
}