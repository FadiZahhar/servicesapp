export default function Pricing() {
    return(    <section id="pricing" className="pricing">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Pricing</h2>
        <h3>Check our <span>Pricing</span></h3>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="box">
            <h3>Free</h3>
            <h4><sup>$</sup>0<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className="na">Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <div className="box featured">
            <h3>Business</h3>
            <h4><sup>$</sup>19<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <div className="box">
            <h3>Developer</h3>
            <h4><sup>$</sup>29<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
          <div className="box">
            <span className="advanced">Advanced</span>
            <h3>Ultimate</h3>
            <h4><sup>$</sup>49<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>)
}