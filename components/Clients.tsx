import client1 from '@/assets/img/clients/client-1.png'
import client2 from '@/assets/img/clients/client-2.png'
import client3 from '@/assets/img/clients/client-3.png'
import client4 from '@/assets/img/clients/client-4.png'
import client5 from '@/assets/img/clients/client-5.png'
import client6 from '@/assets/img/clients/client-6.png'
export default function Clients() {
    return(    <section id="clients" className="clients section-bg">
    <div className="container" data-aos="zoom-in">

      <div className="row">

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <img src={client1.src} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
         <img src={client2.src} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
         <img src={client3.src} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
         <img src={client4.src} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
         <img src={client5.src} className="img-fluid" alt="" />
        </div>

        <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
         <img src={client6.src} className="img-fluid" alt="" />
        </div>

      </div>

    </div>
  </section>)
}