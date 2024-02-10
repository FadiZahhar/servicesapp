import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default function Hero() {
    const [isOpen, setOpen] = useState<boolean>(false);
    return(<section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Welcome to <span>Pro-Solutions.net</span></h1>
      <h2>Bringing Your Ideas to Life with Agile MVP Development</h2>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <ModalVideo 
        channel="youtube"
        isOpen={isOpen} 
        videoId="7OQ3lhWirF4" // Use your video ID
        onClose={() => setOpen(false)} 
      />
        <a onClick={() => setOpen(true)} className="glightbox btn-watch-video" style={{'cursor':'pointer'}}><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>)
}