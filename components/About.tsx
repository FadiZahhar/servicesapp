"use client"
import mvp1 from '@/assets/img/about/about-mvp.jpg';
import mvp2 from '@/assets/img/about/how-mvp.jpg';
import mvp3 from '@/assets/img/about/how-mvp-dev.jpg';
import { FaStoreAlt } from "react-icons/fa";
import { BiImages } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // core Swiper
import 'swiper/css/pagination'; // Pagination module
// import required modules
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';

export default function About() {
    const [isOpen, setOpen] = useState<boolean>(false);
    return(<section id="about" className="about section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>How we help</h2>
        <h3>Find Out More <span>how we bring your idea to life</span></h3>
        <p>We work with you to refine the idea into a clear, compelling value proposition.</p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
    >
      <SwiperSlide><img src={mvp1.src} className="img-fluid" alt="About MVP" /></SwiperSlide>
      <SwiperSlide><img src={mvp2.src} className="img-fluid" alt="How to Build an MVP" /></SwiperSlide>
      <SwiperSlide><img src={mvp3.src} className="img-fluid" alt="How Develop an MVP" /></SwiperSlide>
      {/* Add more SwiperSlides as needed */}
    </Swiper>
        <div className='video-btn'>
        <ModalVideo 
            channel="youtube" 
            isOpen={isOpen} 
            videoId="Z1VbVM0Wdv8" // Use your video ID
            onClose={() => setOpen(false)} 
        />
        <a onClick={() => setOpen(true)} className="glightbox btn-watch-video" style={{'cursor':'pointer'}}><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
        </div>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <h3>We Identify and define the problem your product aims to solve. Engage with potential users to ensure the problem is significant and widespread.</h3>
          <p className="fst-italic">
           Focus on the core feature or set of features that directly address the problem. This is your product&apos; value proposition.
          </p>
          <ul>
            <li>
              <i className="bx bx-store-alt"><FaStoreAlt /></i>
              <div>
                <h5>Utilize data analytics and user research to develop accurate user personas.</h5>
                <p>Assist in segmenting the market to focus your MVP on the most receptive audience.</p>
              </div>
            </li>
            <li>
              <i className="bx bx-images"><BiImages /></i>
              <div>
                <h5>List all potential features, then categorize them into &quot;must-have&quot;, &quot;nice-to-have&quot;, and &quot;non-essential&quot; buckets.</h5>
                <p>Apply our expertise in product development to recommend the essential features for your MVP.</p>
              </div>
            </li>
          </ul>
          <p>
          Creating a successful MVP is about learning quickly what works and what doesn&apos;t with the least amount of effort. Pro-Solutions.net partners with you through this journey, leveraging our expertise in technology and product development to ensure your MVP has the best chance of success. Our approach is collaborative, data-driven, and user-focused, ensuring that your product not only meets the market need but is also positioned for growth and scalability.
          </p>
        </div>
      </div>

    </div>
  </section>)
}