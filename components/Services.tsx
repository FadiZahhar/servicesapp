import { FaSlack } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { FaVimeoV } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { FaLaravel } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";

export default function Services() {
    return(    <section id="services" className="services">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Services</h2>
        <h3>Check our <span>Services</span></h3>
        <p>Our platform&aposs packages are meticulously designed to support the MVP project, ensuring a comprehensive and efficient development process. The services included in our packages are as follows:</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble"><FaSlack /></i></div>
            <h4><a href="">Dedicated Slack Channel</a></h4>
            <p>Each MVP project is provided with its own dedicated Slack channel. This fosters seamless communication among team members, allowing for instant messaging, file sharing, and collaboration in real-time.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-file"><BsMicrosoftTeams /></i></div>
            <h4><a href="">Scheduled Zoom Meetings and Recorded Sessions</a></h4>
            <p>To facilitate thorough discussions and collaborations, we schedule regular Zoom meetings. These sessions are recorded, ensuring that participants can review discussions and decisions at their convenience, enhancing project continuity and learning.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer"><FaVimeoV /></i></div>
            <h4><a href="">Shared Vimeo Account for Video Training</a></h4>
            <p>A shared Vimeo account is provided, granting access to an extensive library of video training materials. This includes specialized training on the solution being developed, offering a rich resource for learning and development.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world"><AiOutlineSolution /></i></div>
            <h4><a href="">Comprehensive Solution Development</a></h4>
            <p>Our platform supports development across multiple stacks</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-slideshow"><FaLaravel /></i></div>
            <h4><a href="">Laravel</a></h4>
            <p>For robust backend solutions using this popular PHP framework.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><FaNodeJs /></i></div>
            <h4><a href="">Node.js Express</a></h4>
            <p>For creating scalable and efficient server-side applications.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><TbCloudComputing /></i></div>
            <h4><a href="">Cloud Computing</a></h4>
            <p>Leveraging AWS (Amazon Web Services) and Firebase to ensure scalable, reliable, and cost-effective cloud solutions. This enables the MVP to be built with a strong foundation, ready for scaling and future development.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><FaMobileAlt /></i></div>
            <h4><a href="">Mobile Application Development</a></h4>
            <p>Recognizing the importance of mobile presence, we leverage React Native to develop cross-platform mobile applications. This approach allows us to create high-performance and visually appealing mobile apps that provide a seamless user experience across both Android and iOS platforms. Our focus on React Native ensures rapid development and delivery of your MVP’s mobile component, enabling you to reach your target audience on their preferred devices efficiently.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><FaWordpress /></i></div>
            <h4><a href="">Custom Theme Development</a></h4>
            <p>We design and develop bespoke WordPress, Drupal themes that align with your MVP&aposs branding and functional requirements, ensuring a unique and optimized web presence.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><BsPlugin /></i></div>
            <h4><a href="">Plugin Development</a></h4>
            <p>To extend the functionality of your MVP&aposs WordPress site, we create custom plugins. Whether you need to add specific features, integrate third-party services, or improve operational efficiency, our custom plugin development service is geared towards enhancing your platform&aposs capabilities.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><FaShopify /></i></div>
            <h4><a href="">Shopify Theme Development</a></h4>
            <p>Understanding the importance of brand identity and user experience in the e-commerce space, we offer custom Shopify theme development services. Our approach involves designing and developing bespoke themes that not only reflect your brand’s aesthetic but also offer intuitive navigation and seamless shopping experiences for your customers. By focusing on custom themes, we ensure your online store stands out in a competitive market and resonates with your target audience.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"><MdOutlineSettingsApplications /></i></div>
            <h4><a href="">Shopify app development</a></h4>
            <p>Our Shopify app development service is a testament to our commitment to providing a comprehensive suite of solutions for MVP projects in the e-commerce domain. By developing custom Shopify apps, we ensure that your online store not only meets but exceeds the expectations of both your business and your customers, setting a solid foundation for growth and success.</p>
          </div>
        </div>


      </div>

    </div>
  </section>)
}